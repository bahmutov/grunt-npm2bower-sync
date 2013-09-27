/**
 * grunt-sync-pkg
 * http://github.com/jonschlinkert/grunt-sync-pkg
 *
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var _ = grunt.util._;

  function verifyPackage(pkg) {
    if (!_.isObject(pkg)) {
      grunt.fail.warn('invalid package object');
    }
    if (!_.isString(pkg.name)) {
      grunt.fail.warn('package.json is missing name');
    }
    if (!_.isString(pkg.author) &&
      !_.isObject(pkg.author)) {
      grunt.fail.warn('package.json is missing author');
    }
    if (!_.isString(pkg.version)) {
      grunt.fail.warn('package.json is missing version');
    }
  }

  function sync() {
    var propertiesToSync = this.data.options.sync || [
      'name',
      'author',
      'version',
      'description'
    ];
    grunt.verbose.writeln('syncing', propertiesToSync);

    var pkg = grunt.file.readJSON('package.json');
    verifyPackage(pkg);

    // If bower.json doesn't exist yet, add one.
    if (!grunt.file.exists('bower.json')) {
      grunt.file.write('bower.json', "{}");
    }

    var bower = grunt.file.readJSON('bower.json');

    var options = {};
    propertiesToSync.forEach(function (propertyToSync) {
      options[propertyToSync] = pkg[propertyToSync] || this.data.options[propertyToSync];
    }, this);
    grunt.verbose.writeln('options added to bower', JSON.stringify(options, null, 2));

    bower = JSON.stringify(_.extend(bower, options), null, 2);
    grunt.file.write('bower.json', bower);
  }

  grunt.registerMultiTask('sync', 'Sync package.json -> bower.json', sync);

};
