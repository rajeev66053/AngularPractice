
//create the module
var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					var employees=[
								{	firstName:"Ben",lastName:"Hastings",gender:"Male",salary:5000	},
								{	firstName:"David",lastName:"Beckham",gender:"Male",salary:6000	},
								{	firstName:"Sara",lastName:"Khan",gender:"Female",salary:6500	},
								{	firstName:"Mark",lastName:"Saylek",gender:"Male",salary:3000	},
								{	firstName:"Paul",lastName:"Coroza",gender:"Male",salary:7600	}
							];

					$scope.employees=employees;


					var countries=[
									{	name:"UK",
										cities:[
											{name:"London"},
											{name:"Manchester"},
											{name:"Birmingham"},
										]
									},
									{	name:"USA",
										cities:[
											{name:"Los Amngeles"},
											{name:"Chicago"},
											{name:"Houston"},
										]
									},
									{	name:"India",
										cities:[
											{name:"Hyderabad"},
											{name:"Chennai"},
											{name:"Mumbai"},
										]
									}
								];

					$scope.countries=countries;
				});