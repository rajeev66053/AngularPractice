
//create the module
var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
								var country={
									name:"United States of America",
									capital:"Wasington, DC",
									flag:"images/us-flag.jpg"
								};
								$scope.country=country;
							});