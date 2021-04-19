
//create the module
var myApp = angular
				.module("myModule",[])
				.controller("myController",function($scope){
					var technologies=[
									{	name:"C#",likes:0,dislikes:0 },
									{	name:"Asp.net",likes:0,dislikes:0 },
									{	name:"Sql Server",likes:0,dislikes:0 },
									{	name:"AngularJs",likes:0,dislikes:0 }
								];

					$scope.technologies=technologies;

					$scope.incrementLikes=function(technology){
						technology.likes++;

					}

					$scope.incrementDislikes=function(technology){
						technology.dislikes++;

					}
				});