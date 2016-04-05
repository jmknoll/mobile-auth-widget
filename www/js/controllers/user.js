(function(){

'use strict';

var app = angular.module('starter');

app.controller('UserCtrl', function($scope, $log, User){

	$log.info('In User Controller');

	$scope.showSigninForm = true;

	$scope.credentials = {};

	$scope.signin = function(){
		return User.signin($scope.credentials)
		.then(function(){
			$log.info('User logged in.');
		}, function(err){
			$log.error('Error logging in.');
			$log.info(err);
		});
	};

	$scope.signup = function(){
		return User.signup($scope.credentials)
		.then(function(){
			$log.info('User signed up.');	
		}, function(err){
			$log.error('Error logging in.');
			$log.info(err);
		});
	};

});

})();