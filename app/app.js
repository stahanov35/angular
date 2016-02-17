'use strict'

/**
* propCrossApp Module
*/
var propCrossApp = angular.module('propCrossApp', []);

/**
* Declare controller for search result
*/
propCrossApp.controller('SearchData', function ($scope, $http) {
	var baseUrl 			= 'http://api.nestoria.co.uk/api',
			jsonCallback 	= '&callback=JSON_CALLBACK';

	$scope.getLocationData = function ($event) {
		var elTarget = angular.element($event.target),
				response;

		if (elTarget.attr('data-my-location')){
				$scope.place = elTarget.attr('data-my-location');
		}

		if (!angular.isUndefined($scope.place)) {
			$http.jsonp(baseUrl + '?action=search_listings&country=uk&encoding=json&listing_type=buy&place_name=' + 
									$scope.place + 
									jsonCallback).
					success(function(data){
						$scope.data = data;
						response 	= $scope.data.response;
						$scope.locations = response.locations;
						$scope.totalResults = response.total_results;
						$scope.boolStatusCode = (parseInt(response.application_response_code) < 112) ? false : true;
					}).
					error(function (data) {
						$scope.data = 'Request failed';
					});
		} else {
			$scope.boolStatusCode = true;
		}
	}
})