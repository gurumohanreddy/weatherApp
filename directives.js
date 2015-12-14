myApp.directive('searchResults',function(){
    return{
      replace: true,
      restrict: 'E',
      templateUrl:'directives/searchresults.html',
      scope:{
          weatherDay: '=',
          convertToDate: '&',
          convertToCelcius: '&',
          dateFormat: '@'
      }

    }
});
