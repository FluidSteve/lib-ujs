module.exports = function(grunt) {

    grunt.initConfig({

        // the package file to use
        pkg: grunt.file.readJSON('package.json'),


        /* tasks */

        // qunit :: tells the qunit plugin to execute all tests found in any .html file in the "tests" folder.
        qunit: {
            all: ['tests/*.html']
        },

        // watch :: have tests run every time some warched file changes
        watch: {
            files: ['tests/*.js', 'tests/*.html', 'src/*.js'],
            tasks: ['qunit']
        },


        // bower-install : add new path to html
        bowerInstall: {
            target: {
                src: [
                    'tests/index.html',
                    'tests/build.html'
                ]
            }
        },

        // copy : copy files to dist/
        "copy": {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**'],
                    dest: 'dist/src'
                }]
            }
        },

        // clean
        "clean" : ['dist/'],

        // concat
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/*.js'],
                dest: 'dist/dev/lib-ujs.dev.js'
            }
        },

        uglify: {
            my_target: {
                files: {
                    'dist/min/lib-ujs.min.js': ['dist/dev/lib-ujs.dev.js']
                }
            }
        }


    });


    // load up your plugins
    // qunit
    grunt.loadNpmTasks('grunt-contrib-qunit');

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // automatically add assets to tests/index.html
    grunt.loadNpmTasks('grunt-bower-install');

    // copy
    grunt.loadNpmTasks('grunt-contrib-copy');

    // clean
    grunt.loadNpmTasks('grunt-contrib-clean');

    // concat
    grunt.loadNpmTasks('grunt-contrib-concat');

    // uglify
    grunt.loadNpmTasks('grunt-contrib-uglify');



    // define task lists ( ALWAYS have a "default" task list )
    grunt.registerTask('default', ['qunit']);

    // TEST task : qunit only
    grunt.registerTask('test', ['qunit']);

    // TEST task : qunit only
    grunt.registerTask('addAssets', ['bowerInstall']);

    // build task : clean previous dist, copy original sources, process ( concat-uglify ) min version
    grunt.registerTask('build', ['clean', 'copy:main', 'concat', 'uglify']);

    /*grunt.registerTask('default', ['taskToRun']);
    grunt.registerTask('taskName', ['taskToRun', 'anotherTask']);*/

};