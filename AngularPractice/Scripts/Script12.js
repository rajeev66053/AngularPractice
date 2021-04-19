
//create the module
var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					var employees=[
								{	name:"Ben",gender:"Male",salary:55000.765,city:"London"	},
								{	name:"David",gender:"Male",salary:68000,city:"Chennai"	},
								{	name:"Sara",gender:"Female",salary:57000,city:"London"	},
								{	name:"Mark",gender:"Male",salary:53000,city:"Chennai"	},
								{	name:"Paul",gender:"Male",salary:76000,city:"London"	}
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