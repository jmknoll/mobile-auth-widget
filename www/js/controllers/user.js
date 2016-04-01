(function(){

'use strict';

var app = angular.module('starter');

app.controller('UserCtrl', function($scope, $log){

	$log.info('In User Controller');

	$scope.showSigninForm = true;

});

})();