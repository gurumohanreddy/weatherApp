var myApp = angular.module('myApp',['ngRoute','ngResource']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'./pages/home.html',
        controller:'maincontroller'
    })
    .when('/forecast',{
        templateUrl:'./pages/forecast.html',
        controller:'secondcontroller'
    })
    .when('/forecast/:days',{
        templateUrl:'./pages/forecast.html',
        controller:'secondcontroller'
    })
});

myApp.service('inputservice',function(){

      this.name = 'Hyderabad,Telangana';
});


myApp.controller('maincontroller',['$scope','inputservice',function($scope,inputservice){
        $scope.name = inputservice.name;
        $scope.$watch('name',function(){
            inputservice.name = $scope.name;
        });

}]);
myApp.controller('secondcontroller',['$scope','$resource','$routeParams','inputservice',function($scope,$resource,$routeParams,inputservice){
        $scope.name = inputservice.name;
        $scope.days = $routeParams.days || '2';
        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback:'JSON_CALLBACK'},{get:{method:'JSONP'}});
        $scope.weatherresult = $scope.weatherAPI.get({ q: $scope.name,cnt: $scope.days,appid: '2de143494c0b295cca9337e1e96b00e0'});
        // console.log($scope.weatherresult);
        $scope.convertToCelcius = function(degk){
            return Math.round((degk-273.15));
        };

        $scope.convertTODate = function(dt){

            return new Date(dt*1000);
        };
}]);
