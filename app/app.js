'use strict'

// Declare app level module which depends
/**
* propCrossApp Module
*
* Description
*/
var propCrossApp = angular.module('propCrossApp', []);

// Declare controller for search result
propCrossApp.controller('SearchData', function ($scope, $http) {
	var baseUrl 			= 'http://api.nestoria.co.uk/api',
			jsonCallback 	= '&callback=JSON_CALLBACK';

	$scope.getLocationData = function () {
		console.log($scope.place);
		if(!angular.isUndefined($scope.place)){
			$http.jsonp(baseUrl + '?action=search_listings&country=uk&encoding=json&listing_type=buy&place_name=' + $scope.place + jsonCallback).
				success(function(data){
					$scope.data = data;
					var response = $scope.data.response;

					$scope.locations 			= response.locations;
					$scope.totalResults 	= response.total_results;
					$scope.boolStatusCode = (parseInt(response.application_response_code) < 112) ? false : true;

					console.log($scope.data, $scope.boolStatusCode);
				}).
				error(function (data) {
					$scope.data = "Request failed";
				});
		}
	}
})