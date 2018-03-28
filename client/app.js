/**
 * Created by Pravin on 29/03/2018.
 */

'use strict';

var App = angular.module('calenderCode',['ui.router','appIndex']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				$urlRouterProvider.otherwise("/app/calendercode");
				
				$stateProvider  
                    .state('app', {
                        url: "/app",
                        abstract: true
                    })
                    
			}]);

