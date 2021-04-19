
//create the module
var myApp = angular
				.module("myModule",[])				
				.controller("myController",function($scope){
					var employees=[
								{	name:"Ben",gender:"Male",salary:55000	},
								{	name:"David",gender:"Male",salary:68000	},
								{	name:"Sara",gender:"Female",salary:57000	},
								{	name:"Mark",gender:"Male",salary:53000	},
								{	name:"Paul",gender:"Male",salary:76000	}
							];

					$scope.employees=employees;

					$scope.employeeView="EmployeeTable18.html";

				});