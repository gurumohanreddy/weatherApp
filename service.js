myApp.service('inputservice',function(){

      this.name = 'Hyderabad,Telangana';
});

myApp.service('weatherservice',['$resource',function($resource){

    this.GetWeather = function(name,days){

  var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback:'JSON_CALLBACK'},{get:{method:'JSONP'}});
  return weatherAPI.get({ q: name,cnt:days,appid: '2de143494c0b295cca9337e1e96b00e0'});
    }


}]);
