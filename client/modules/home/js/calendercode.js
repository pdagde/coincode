/**
 * Created by Pravin on 29/03/2018.
 */
angular.module('calenderCtrl',[])
    .controller('calendercodeCtrl',function ($scope,$window,$state) {

        
 var url = window.location.href; 
        var temp_redirect = $window.location.href;
        temp_redirect =    temp_redirect.substring(0, temp_redirect.indexOf('#'));
        temp_redirect =    temp_redirect.split( '/');
        temp_redirect = temp_redirect[temp_redirect.length -1];
         if(temp_redirect){
         	    $state.go('app.shortUrl');
                  
         }else{
             $state.go('app.landingPage');
         }
    
})