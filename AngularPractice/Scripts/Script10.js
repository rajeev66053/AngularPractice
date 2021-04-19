
//create the module
var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					var employees=[
								{	name:"Ben",dateOfBirth:new Date("November 23,1980"),gender:"Male",salary:55000.765	},
								{	name:"David",dateOfBirth:new Date("May 05,1981"),gender:"Male",salary:68000	},
								{	name:"Sara",dateOfBirth:new Date("August 12,1975"),gender:"Female",salary:57000	},
								{	name:"Mark",dateOfBirth:new Date("January 19,1988"),gender:"Male",salary:53000	},
								{	name:"Paul",dateOfBirth:new Date("March 15,1996"),gender:"Male",salary:76000	}
							];

					$scope.employees=employees;

					$scope.sortColumn="name";
					$scope.reverseSort=false;

					$scope.sortData=function(column){
						$scope.reverseSort=($scope.sortColumn==column) ? !$scope.reverseSort : false;
						$scope.sortColumn=column;

					}

					$scope.getSortClass =function(column){
						console.log($scope.sortColumn);
						if($scope.sortColumn==column) {
							return $scope.reverseSort ? 'arrow-down':'arrow-up';
						}
						return '';

					}

				});