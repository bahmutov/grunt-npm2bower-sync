# grunt-npm2bower-sync

> Syncs specified properties from package.json to bower.json

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
        sync: ['author', 'name', 'version', 'private']
      }
    }
  }

  grunt.loadNpmTasks('grunt-npm2bower-sync');
  grunt.registerTask('default', ['jshint', 'sync']);
});
```
You can also sync properties from the command line using command `grunt sync`


## License

This repo was forked from [grunt-sync-pkg](https://github.com/jonschlinkert/grunt-sync-pkg) by Jon Schlinkert.

Copyright (c) 2013-09-09 Jon Schlinkert
Licensed under the [MIT LICENSE](LICENSE-MIT).
