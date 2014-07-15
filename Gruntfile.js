module.exports = function(grunt) {

    // CONFIG 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {                                // Task
            dynamic: {                             // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'images/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'BUILD/images/'                  // Destination path prefix
                }]
            }
        },

        concat: {
            dist: {
                src: [
                    //'js/libs/*.js', // All JS in the libs folder
                    'DEV/js/libs/angular.js',
                    'DEV/js/libs/angular-route.js',
                    'DEV/js/app.js',
                    'DEV/js/directives/*.js',
                    'DEV/js/factories/*.js',
                    'DEV/js/controllers/*.js'
                ],
                dest: 'BUILD/js/main.js',
            }
        },

        uglify: {
            build: {
                src: 'BUILD/js/main.js',
                dest: 'BUILD/js/main.min.js'
            }
        },

        watch: {
            scripts: {
                files: ['DEV/js/*.js',
                        'DEV/js/directives/*.js',
                        'DEV/js/factories/*.js',
                        'DEV/js/controllers/*.js'
                        ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },

            css: {
                files: [
                    'DEV/sass/*.scss', 
                    'DEV/sass/*/*.scss', 
                    'DEV/sass/*/*/*.scss'
                ],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            }
        },

        compass: {                  
            dist: {                
                options: {          
                    sassDir: 'DEV/sass',
                    cssDir: 'BUILD/css',
                    environment: 'production'
                }
            }
        },

        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                  script: 'server.js'
                }
            }
        }

    });

    // PACKAGES
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-express-server');

    // RUN GRUNT 
    grunt.registerTask('default', ['concat', 'uglify', 'express:dev', 'watch', 'compass']);

};