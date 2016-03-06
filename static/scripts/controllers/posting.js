'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:PostCtrl
 * @description
 * # postCtrl
 * Controller of the frontendApp
 */

angular.module('frontendApp')
	.controller('PostCtrl', ['$scope', function($scope) {
		$scope.postings = [ {
				uName:'firelizard',
			    uid:1,
			    pid:123,
			    postTitle: 'I am a title',
			    postBody: 'I am the body',
			    profilePic: [],
			    date: 'date!'
			},
			{
				uName:'waterturtle',
			    uid:1,
			    pid:123,
			    postTitle: 'I am a title',
			    postBody: 'I am the body',
			    profilePic: [],
			    date: 'date!',
			}
		];

  }]);