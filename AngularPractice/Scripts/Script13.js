
//create the module
var myApp = angular
				.module("myModule",[])				
				.controller("myController",function($scope){
					var employees=[
								{	name:"Ben",gender:1,salary:55000	},
								{	name:"David",gender:1,salary:68000	},
								{	name:"Sara",gender:2,salary:57000	},
								{	name:"Mark",gender:1,salary:53000	},
								{	name:"Pam",gender:2,salary:76000	},
								{	name:"Todd",gender:3,salary:76000	}
							];

					$scope.employees=employees;

					$scope.search =function(item){
						if($scope.searchText==undefined){
							return true; //this will show all the rows before searching anything

						}else{
							if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1 ||
								item.city.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1){
								return true;

							}
						}
						return false;

					}
					
				});