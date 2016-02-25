'use strict'

/**
* propCrossApp Module
*/
var propCrossApp = angular.module('propCrossApp', []);

/**
* Declare controller for search result
*/
propCrossApp.controller('SearchData', ['$scope', '$http', function ($scope, $http) {
	$scope.stepPages 		= 3;
	var baseUrl 				= 'http://api.nestoria.co.uk/api',
			jsonCallback 		= '&callback=JSON_CALLBACK';

	$scope.getLocationData = function (myLocation, pageNumber) {
		var response,
				page = pageNumber || 1;

		$scope.place = myLocation;

		if (!angular.isUndefined($scope.place)) {
			console.log(baseUrl + '?action=search_listings&country=uk&encoding=json&listing_type=buy&place_name=' + 
									$scope.place + 
									jsonCallback +
									'&page=' + pageNumber);
			$http.jsonp(baseUrl + '?action=search_listings&country=uk&encoding=json&listing_type=buy&place_name=' + 
									$scope.place + 
									jsonCallback +
									'&page=' + pageNumber).
					success(function(data){
						$scope.data 					= data;
						response 							= $scope.data.response;
						$scope.locations 			= response.locations;
						$scope.totalResults 	= response.total_results;
						$scope.listings 			= response.listings;
						$scope.searchError 		= (parseInt(response.application_response_code) < 212) ? false : true;
						console.log(response);
					}).
					error(function (data) {
						$scope.data 					= 'Request failed';
					});
		} else {
			$scope.searchError = true;
		}
	}

	$scope.showResult = function () {
		$scope.bollShowResult = true;
	}

	// Pagination
	// @TODO: Rewrite as component
	$scope.prev = function () {
		
	}
	$scope.next = function () {
		
	}
	$scope.getTimes=function(n){
	  return new Array(n);
	};
}])