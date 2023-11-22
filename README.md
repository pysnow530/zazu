## Zazu2

Zazu2, is a cross platform and fully extensible and open source launcher for
hackers, creators and dabblers. It built upon the foundation of Zazu, and featuring
a modern UI. Download it from the [releases page](https://github.com/pysnow530/zazu2/releases).

Zazu was created to be a fully open source alternative to Alfred, but also be
completely plugin based. You can remove any functionality you don't like, so if
you hate the built in calculator, just get a new one!

We also have all of your configuration in a dotfile in `~/.zazurc.json` so it can
be backed up and synced!

Be sure to check out our amazing [Documentation](http://zazuapp.org).

## Action Shot

### Introduction Video

[![Zazu App - Introduction](docs/images/action-shots/video.png)](https://vimeo.com/206729309)

### Postfix Calculator

Accepts some common equations for you to copy to your clipboard.

![Zazu App - Postfix Calculator Plugin](docs/images/action-shots/calculator.png)

### Clipboard History

Remembers things so you don't have to! Fuzzy search and browser all the things
you've copied.

![Zazu App - Clipboard History](docs/images/action-shots/clipboard.png)

### File Finder

Find Applications or files deep in your file system.

![Zazu App - File Finder](docs/images/action-shots/file-finder.png)

### Build your own!

Zazu is completely open, so build your plugins. You can [get started building
your plugin](http://zazuapp.org//documentation/plugins/) then head over and
submit it to the [plugins](http://zazuapp.org/plugins/) gallery!

## Development

As you might expect:

~~~
npm install
npm start
~~~

If you enable debug mode it will make it so Zazu won't hide and the dev tools
will open by default. You can enable debug mode by adding a `debug` flag to
`true` inside of your `~/.zazurc.json`

If `blur` flag is `false`, then Zazu won't hide when it lost focus.

~~~ javascript
{
  "debug": true,
  "blur": false,
  "hotkey": "cmd+space",
  "theme": "tinytacoteam/zazu-playful-theme",
  "plugins": []
}
~~~

## Deployment

To deploy simple update the version in both `package.json` (eg `0.3.2`).
After comitting you can tag the release, but be sure to add the `v` in
front (eg `v0.3.2`). Push the commits then the tag.

Lastly, you should re-publish the docs. Zazu uses the doc website to see if a
new release is available so doing a quick release will allow others to download
the newest version. Simply run `npm run docs:publish`.
