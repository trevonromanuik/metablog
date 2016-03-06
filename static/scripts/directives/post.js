'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:profilesCtrl
 * @description
 * # profilesCtrl
 * Controller of the frontendApp
 */

angular.module('frontendApp')
.directive('postInfo', function() {
  return {
  	scope: {
    	info: '='
	},
  	templateUrl: 'scripts/directives/post.html' 
  };
});
