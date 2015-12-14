myApp.controller('maincontroller',['$scope','$location','inputservice',function($scope,$location,inputservice){
        $scope.name = inputservice.name;
        $scope.$watch('name',function(){
            inputservice.name = $scope.name;
        });
        $scope.submit = function(){
            $location.path('/forecast');
        }

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

        $scope.convertToDate = function(dt){

            return new Date(dt*1000);
        };
}]);
