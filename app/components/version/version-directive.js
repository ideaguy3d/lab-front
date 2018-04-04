'use strict';

angular.module('labApp.version.version-directive', [])
    .directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text( "LAB 916 app version " + version);
        };
    }]);
