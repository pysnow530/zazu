const path = require('path')
const jetpack = require('fs-jetpack')
const retry = require('./retry')
const installStatus = require('./installStatus')
const { cooldown } = require('./manager')
const freshRequire = require('./pluginFreshRequire')
const { spawn } = require('child_process')

/**
 * If successful, will set the `installStatus` to `installed` and return it, to
 * communicate to `git clone` that we were successful and don't need to run
 * again, until a `git pull`.
 *
 * On failure, returns a rejected promise, so `retry` runs it again.
 */
const npmInstall = cooldown((name, packagePath) => {
  return retry(`npm install [${name}]`, () => {
    const packageFile = path.join(packagePath, 'package.json')
    if (!jetpack.exists(packageFile)) {
      return installStatus.set(name, 'nopackage')
    }
    const pkg = jetpack.read(packageFile, 'json')
    const dependencies = pkg.dependencies
    if (!dependencies) {
      return installStatus.set(name, 'nodeps')
    }
    return new Promise((resolve, reject) => {
      const child = spawn('npm', ['install'], {
        stdio: 'inherit',
        cwd: packagePath,
        env: {
            ...process.env,
            PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin',
        },
        detached: false,
      })
      child.on('error', (error) => {
        reject(error)
      })
      child.on('exit', (code, signal) => {
        if (code === 0) {
          installStatus.set(name, 'installed').then(resolve)
        }
      })
    })
  })
}, () => {
  return freshRequire('npm')
})

module.exports = npmInstall
