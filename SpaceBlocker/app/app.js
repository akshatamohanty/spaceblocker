/**
 * Created by sereb on 10/3/2017.
 */

var spaceBlocker= angular.module('spaceBlocker',['ui.layout','rzModule', 'ui.bootstrap','smart-table','nvd3']);

deskArrayGlobal=null;

spaceBlocker.controller("myCtrl", function($scope) {
	
	$scope.LoadFloor = function(selectedFloor) {
		$scope.floorImage = selectedFloor;
	};

});

spaceBlocker.controller('sliderCtrl', ['$scope', 'dataService', function ($scope, dataService) {

	//Slider config with custom display function
	$scope.slider_translate = {
		value: 0,
		options: {
			stepsArray: dataService.getTimeline(),
			translate: function (value) {
				var today = new Date(value);
				return  today.toDateString();
			}

		}
	};

/*	var broadcast = function(){
		$rootScope.$broadcast('sliderChanged', function(){
			return $scope.slider_translate.value;

		})
	}

	$scope.$watch('slider_translate.value', broadcast)*/



}]);

