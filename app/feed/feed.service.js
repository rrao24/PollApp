var app = angular.module('starter');

app.factory('feedSvc', function($http) {

	var getSampleFeed = function () {
        return $http.get('json/sampleFeed.json').then(function (response) {
          angular.forEach(response.data, function(poll) {
          	angular.forEach(poll.responses, function (item) {
          		item.isChecked = false;
          	});
          });
          return response.data;
      });     
    }

	return {
		getSampleFeed: getSampleFeed
	}

});