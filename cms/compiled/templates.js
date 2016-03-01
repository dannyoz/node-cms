;(function(){

'use strict';

angular.module('cms').run(['$templateCache', function($templateCache) {

  $templateCache.put('components/footer/footer.tmpl.html', '<div class="container">footer<ul><li><a href="#" class="item1">Lorem ipsum.</a></li><li><a href="#" class="item2">Perferendis, accusantium.</a></li><li><a href="#" class="item3">Unde, quam.</a></li><li><a href="#" class="item4">Quos, recusandae.</a></li><li><a href="#" class="item5">Dolore, corrupti.</a></li></ul></div>');

  $templateCache.put('components/header/header.tmpl.html', '<section id="main" class="container"><h1 ng-bind="::app.name"></h1></section>');

  $templateCache.put('views/edit/edit.tmpl.html', '<section id="main-editor"><div id="header"></div><div id="sidebar"></div><div id="screen"><div class="padded-20"><form class="lined" ng-submit="update(textdata)"><input type="text" placeholder="text" ng-model="textdata"> <button class="primary">Add</button></form></div></div></section>');

  $templateCache.put('views/home/home.tmpl.html', '<section id="home-page" class="container"><h1 ng-bind="::homeText"></h1><button ng-click="editMode()" class="primary">Edit</button></section>');

}]);

})();