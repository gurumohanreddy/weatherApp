myApp.controller('maincontroller',['$scope','$location','inputservice',function($scope,$location,inputservice){
        $scope.name = inputservice.name;
        $scope.$watch('name',function(){
            inputservice.name = $scope.name;
        });
        $scope.submit = function(){
            $location.path('/forecast');
        }

}]);



myApp.controller('secondcontroller',['$scope','$routeParams','inputservice','weatherservice',function($scope,$routeParams,inputservice,weatherservice){
        $scope.name = inputservice.name;
        $scope.days = $routeParams.days || '2';

        $scope.weatherresult = weatherservice.GetWeather($scope.name,$scope.days);
        // console.log($scope.weatherresult);
        $scope.convertToCelcius = function(degk){
            return Math.round((degk-273.15));
        };

        $scope.convertToDate = function(dt){

            return new Date(dt*1000);
        };
}]);
