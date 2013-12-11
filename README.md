# grunt-npm2bower-sync

> Syncs specified properties from package.json to bower.json

[![NPM info][nodei.co]][npm-url]

[![Build status][ci-image]][ci-url]
[![dependencies][dependencies-image]][dependencies-url]
[![devdependencies][devdependencies-image] ][devdependencies-url]
[![endorse][endorse-image]][endorse-url]

```bash
npm install grunt-npm2bower-sync --save-dev
```

Once that's done, add this line to your project's Gruntfile.js:

```js
grunt.initConfig({

  sync: {
    all: {
      options: {
        // sync specific options
        sync: ['author', 'name', 'version', 'private'],
        // optional: specify source and destination filenames
        from: '../package.json',
        to: 'dist/bower.json'
      }
    }
  }

  grunt.loadNpmTasks('grunt-npm2bower-sync');
  grunt.registerTask('default', ['sync']);
});
```
You can also sync properties from the command line using command `grunt sync`


## License

This repo was forked from [grunt-sync-pkg](https://github.com/jonschlinkert/grunt-sync-pkg) by Jon Schlinkert.

Copyright (c) 2013-09-09 Jon Schlinkert
Licensed under the [MIT LICENSE](LICENSE-MIT).

[ci-image]: https://travis-ci.org/bahmutov/grunt-npm2bower-sync.png?branch=master
[ci-url]: https://travis-ci.org/bahmutov/grunt-npm2bower-sync
[nodei.co]: https://nodei.co/npm/grunt-npm2bower-sync.png?downloads=true
[npm-url]: https://npmjs.org/package/grunt-npm2bower-sync
[dependencies-image]: https://david-dm.org/bahmutov/grunt-npm2bower-sync.png
[dependencies-url]: https://david-dm.org/bahmutov/grunt-npm2bower-sync
[devdependencies-image]: https://david-dm.org/bahmutov/grunt-npm2bower-sync/dev-status.png
[devdependencies-url]: https://david-dm.org/bahmutov/grunt-npm2bower-sync#info=devDependencies
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
