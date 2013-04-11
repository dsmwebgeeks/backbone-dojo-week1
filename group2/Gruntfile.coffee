module.exports = (grunt) ->
  defaultTasks = [
    'clean'
    'coffeeify:main'
    'jshint'
    'concat:dist'
    'uglify:dist'
  ]
  testTasks = [
    'clean'
    'coffeify:main'
    'jshint'
  ]
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    meta:
      banner: '\n/************************************************************************\n'+
        ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n <%= pkg.homepage ? "* "+ pkg.homepage + "\n" : "" %>\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> Banno LLC. All rights reserved. \n' +
        ' ***********************************************************************/\n'
    clean: ['lib/**', 'dist/**', 'test/*.js']
    jshint:
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', 'index.js']
    concat:
      dist:
        files: [
          src:
            [
              '<banner:meta.banner>'
              'lib/americano.js'
            ]
          dest:
            'dist/<%= pkg.name %>.js'
        ]
    coffeeify:
      main:
        files: [
          src:
            [
              'src/main/javascript/index.js'
            ]
          dest:
            'index.js'
        ]
    mocha:
      options:
        ignoreLeaks: true
        globals: [
          'window'
          'document'
        ]
        ui: 'bdd'
        run: true
        colors: true
        bail: false
        reporter: 'Nyan'
      all: ['test/**/*.html']
    less:
      bootstrap:
        options:
          paths: ["node_modules/twitter-bootstrap/less/"]
          strictImports: true
        files: [
          src: [
            "node_modules/twitter-bootstrap/less/bootstrap.less"
          ]
          dest: "test/bootstrap.css"
        ]
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        preserveCOmments: 'some'
        report: 'gzip'
        mangle: true
        compress: true
      dist:
        files: [
          src:
            [
              'dist/<%= pkg.name %>.js'
            ]
          dest:
            'dist/<%= pkg.name %>.min.js'
        ]
    watch:
      options:
        debounceDelay: 250
      files: [
        'Gruntfile.coffee'
        'package.json'
        'src/**/*'
        'test/**/*.html'
      ]
      tasks: 'test'

  
  grunt.loadNpmTasks('grunt-contrib')
  grunt.loadNpmTasks('grunt-coffeeify')
  grunt.registerTask('interactive', ['watch'])
  grunt.registerTask('test', testTasks)
  grunt.registerTask('default', defaultTasks)