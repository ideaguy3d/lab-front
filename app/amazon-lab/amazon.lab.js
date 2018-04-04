angular.module('labApp.amazon-lab', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/amazon-lab', {
            templateUrl: 'amazon-lab/view.amazon.lab.html',
            controller: 'AmazonLabCtrl'
        })
    }])
    .controller('AmazonLabCtrl', ['$http', AmazonLabCtrlClass]);

function AmazonLabCtrlClass($http) {

}