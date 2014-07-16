Angular Node boilerplate
=====================

A boilerplate for angular web apps utilising useful Node packages. It uses express to run a server to allow ng-view and ng-includes to work locally. Grunt is used to concatinate scripts, compile sass, compress css, compress images, watch for changes to js and sass files and it deploys the server.

##### Node Dependancies:

- grunt
- express 3.4.8
- grunt-contrib-concat 0.3.0
- grunt-contrib-uglify 0.4.0
- grunt-contrib-imagemin 0.5.0
- grunt-contrib-watch 0.5.3
- grunt-contrib-sass 0.7.3
- grunt-contrib-compass 0.7.2

##### Installation:

Please install node.js if yo have not done so already. Clone to desired location then navigate to the project folder in command prompt. Run an npm install to install node packages. Run grunt by typing "grunt" and hitting enter.  The server will now be running at http://localhost:3000