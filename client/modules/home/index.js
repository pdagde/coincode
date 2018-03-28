/**
 * Created by Pravin on 29/03/2018.
 */

angular.module('appHome',['calenderCodeCtrl','calenderCtrl'])
    .config(function($stateProvider) {
        $stateProvider

            .state('app.landingPage', {
                url: "/landingPage",
                templateUrl: "modules/home/template/landingPage.html",
                controller : "calenderCtrl"
            })
            .state('app.calendercode', {
                url: "/calendercode",
                templateUrl: "modules/home/template/calendercode.html",
                controller : "calendercodeCtrl"
            })
           


    });
