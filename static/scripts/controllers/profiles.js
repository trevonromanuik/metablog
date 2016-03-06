'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:profilesCtrl
 * @description
 * # profilesCtrl
 * Controller of the frontendApp
 */

angular.module('frontendApp').
	controller('ProfilesCtrl', ['$scope', function($scope) {
		$scope.uName ='firelizard';
	    $scope.fName = 'Charmander';
	    $scope.lName= 'Char';
	    $scope.email='char@pokeman.com';
	    $scope.uid='123';
	    $scope.gitId='charchar';
	    $scope.followers='test';
	    $scope.following='test';

  }]);