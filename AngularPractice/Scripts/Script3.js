
//create the module
var myApp = angular.module("myModule",[]);


//Register controller with module
myApp.controller("myController",function($scope){
	var employee={
		firstName:"David",
		lastName:"Hastings",
		gender:"Male"
	};
	$scope.employee=employee;
});