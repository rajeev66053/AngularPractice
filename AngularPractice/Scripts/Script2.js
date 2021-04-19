
//create the module
var myApp = angular.module("myModule",[]);

//create the controller
var myController = function($scope){
	$scope.message="Angularjs Tutorial"
};

//Register controller with module
myApp.controller("myController",myController);