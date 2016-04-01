(function(){

'use strict';

var app = angular.module('starter');

app.factory('User', function($log, $scope, $http, $q){

	var apiUrl = 'http://www.example.com';

	return {
		signin: function(credentials){
			var d = $q.defer();
			
			$http.post(apiUrl + '/signin', credentials)
			.success(function(res){
				var token = res.token;
				$http.defaults.headers.common.Authorization = 'Bearer ' + token;
				d.resolve(res);				
			}).error(function(err){
				$log.error('There has been an error logging in');
				$log.error(err);
				d.reject(err);
			});

			return d.promise;
		},

		signup: function(credentials){
			var d = $q.defer();

			$http.post(apiUrl + '/signup', credentials)
			.success(function(res){
				var token = res.token;
				$http.defaults.headers.common.Authorization = 'Bearer ' + token;
				d.resolve(res);
			}).error(function(err){
				$log.error('There has been an error signing up');
				$log.error(err);
				d.reject(err);
			});

			return d.promise;
		}

	};

});

})();