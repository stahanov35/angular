'use strict'

var dependences = [
	'ngRoute'
];
/**
* propCrossApp Module
*/
var propCrossApp = angular.module('propCrossApp', dependences);

// propCrossApp.config(['$routeProvider', function($routeProvider) {
//   $routeProvider.
//     when('/main', {
//       templateUrl: '/views/main.tpl.html',
//       controller: 'SearchData'
//     }).
//     otherwise({
//       redirectTo: '/'
//     });
//     console.log($routeProvider);
// }]);