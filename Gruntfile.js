'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'handlebars'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // show elapsed time at the end
    require('time-grunt')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: '',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,

        // watch list
        watch: {

            livereload: {
                files: [

                    'scripts/{,**/}*.js',
                    'templates/{,**/}*.hbs',

                    'test/spec/{,**/}*.js'
                ],
                tasks: ['exec'],
                options: {
                    livereload: true
                }
            }
            /* not used at the moment
            handlebars: {
                files: [
                    'templates/*.hbs'
                ],
                tasks: ['handlebars']
            }*/
        },

        // testing server
        connect: {
            testserver: {
                options: {
                    port: 1234,
                    base: '.'
                    // ,
                    // open: true
                }
            },
            preview_dist: {
                options: {
                    port: 8888,
                    base: '.',
                    directory: 'dist'
                }
            }
        },

        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*'],
            server: '.tmp'
        },

        // linting
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'scripts/{,*/}*.js',
                '!scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        // mocha command
        exec: {
            mocha: {
                command: 'mocha-phantomjs http://localhost:<%= connect.testserver.options.port %>/test',
                stdout: true
            }
        },

        // require
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {

                    baseUrl: 'scripts',

                    name: "main",
                    // include: ["foo/bar/bee"],
                    // insertRequire: ['foo/bar/bop'],
                    out: "dist/scripts/main.js",

                    preserveLicenseComments: false,

                    // https://github.com/jrburke/r.js/blob/master/build/example.build.js
                    optimize: 'uglify',
                    uglify: {
                        toplevel: true,
                        ascii_only: true,
                        beautify: true,
                        max_line_length: 1000,

                        //How to pass uglifyjs defined symbols for AST symbol replacement,
                        //see "defines" options for ast_mangle in the uglifys docs.
                        defines: {
                            DEBUG: ['name', 'false']
                        },

                        //Custom value supported by r.js but done differently
                        //in uglifyjs directly:
                        //Skip the processor.ast_mangle() part of the uglify call (r.js 2.0.5+)
                        no_mangle: true
                    },

                    /* starting point for application */
                    deps: ['backbone.marionette', 'bootstrap', 'main'],


                    shim: {
                        backbone: {
                            deps: [
                                'underscore',
                                'jquery'
                            ],
                            exports: 'Backbone'
                        },
                        bootstrap: {
                            deps: ['jquery'],
                            exports: 'jquery'
                        }
                    },

                    paths: {
                        'main': 'main',
                        'templates': '../.tmp/scripts/templates',
                        jquery: '../bower_components/jquery/jquery',
                        backbone: '../bower_components/backbone-amd/backbone',
                        underscore: '../bower_components/underscore-amd/underscore',

                        /* alias all marionette libs */
                        'backbone.marionette': '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
                        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
                        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',

                        /* alias the bootstrap js lib */
                        bootstrap: 'vendor/bootstrap',

                        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
                        text: '../bower_components/requirejs-text/text',
                        tmpl: "../templates",

                        /* handlebars from the require handlerbars plugin below */
                        handlebars: '../bower_components/require-handlebars-plugin/Handlebars',

                        /* require handlebars plugin - Alex Sexton */
                        i18nprecompile: '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
                        json2: '../bower_components/require-handlebars-plugin/hbs/json2',
                        hbs: '../bower_components/require-handlebars-plugin/hbs'
                    },

                    hbs: {
                        disableI18n: true
                    }

                }
            }
        },

        useminPrepare: {
            html: 'index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },

        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        'styles/{,*/}*.css'
                    ]
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '.',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'bower_components/requirejs/require.js'
                    ]
                }]
            }
        },

        // handlebars
        handlebars: {
            compile: {
                options: {
                    namespace: 'JST',
                    amd: true
                },
                files: {
                    '.tmp/scripts/templates.js': ['templates/**/*.hbs']
                }
            }
        }
    });

    grunt.registerTask('createDefaultTemplate', function () {
        grunt.file.write('.tmp/scripts/templates.js', 'this.JST = this.JST || {};');
    });

    // starts express server with live testing via testserver
    // grunt.registerTask('default', function (target) {

    //     grunt.option('force', true);

    //     grunt.task.run([
    //         'clean:server',
    //         'connect:testserver',
    //         'watch'
    //     ]);
    // });

    grunt.registerTask('default', [
        'clean:server',
        'connect:testserver',
        'watch'
    ]);

    grunt.registerTask('preview_dist', [
        'clean',
        'build',
        'connect:preview_dist',
        'watch'
    ]);

    // todo fix these
    grunt.registerTask('test', [
        'clean:server',
        'createDefaultTemplate',
        'handlebars',
        'connect:testserver',
        'exec:mocha'
    ]);

    grunt.registerTask('build', [
        'createDefaultTemplate',
        'handlebars',
        'useminPrepare',
        'requirejs',
        'imagemin',
        'htmlmin',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'usemin'
    ]);

};
