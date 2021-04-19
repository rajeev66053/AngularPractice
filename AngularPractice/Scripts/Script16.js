
//create the module
var myApp = angular
				.module("myModule",[])				
				.controller("myController",function($scope){
					var employees=[
								{	name:'Ben',gender:'Male',city:'London'	},
								{	name:'David',gender:'Male',city:'Chennai'	},
								{	name:'Sara',gender:'Female',city:'London'	},
								{	name:'Mark',gender:'Male',city:'Chennai'	},
								{	name:'Paul',gender:'Male',city:'London'	}
							];

					$scope.employees=employees;
					
				});