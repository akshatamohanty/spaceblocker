/**
 * Created by sereb on 10/3/2017.
 */

require('angular-ui-layout')
require('./assets/js/rzslider.js');
require('./assets/js/exportToXLS.js');

import accordion from 'angular-ui-bootstrap/src/accordion';
console.log(accordion);
/*
window.d3 = require('./assets/js/d3.v3.min.js');
require('./assets/js/nv.d3.js');
require('./assets/js/angular-nvd3.js');*/

var spaceBlocker = angular.module('spaceBlocker', [ accordion,'rzModule', require('angular-ui-layout') ]);

spaceBlocker.controller("myCtrl", function($scope) {
	
	$scope.LoadFloor = function(selectedFloor) {
		$scope.floorImage = selectedFloor;
	};

});

export const app = spaceBlocker;
