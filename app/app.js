'use strict'

// Declare app level module which depends
/**
* propCrossApp Module
*
* Description
*/
var propCrossApp = angular.module('propCrossApp', []);

// Declare controller for search result
propCrossApp.controller('SearchData', ['$scope', function ($scope) {
	$scope.property = [
		{
	        name: 'Ghost caste',
	        count: 12
    	},
    	{
	        name: 'Name caste',
	        count: 8
    	}
   ]
}])