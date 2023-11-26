const { createRoot } = require('react-dom/client')
const React = require('react')

const ConfigWrapper = require('./containers/configWrapper')
const PluginWrapper = require('./containers/pluginWrapper')

createRoot(document.getElementById('zazu')).render(
  <ConfigWrapper>
    <PluginWrapper />
  </ConfigWrapper>
)

// Catch `esc` or `enter` to avoid alert beep.
document.body.onkeydown = e => {
  return e.key !== 'Enter' && e.key !== 'Escape'
}
