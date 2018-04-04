'use strict';

// Declare app level module which depends on views, and components
angular.module('labApp', [
  'ngRoute',
  'labApp.view1',
  'labApp.view2',
  'labApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
