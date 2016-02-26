'use strict';

portfolio.factory('ResourceFactory', ['$http', function($http) {

 var path = './assets/resources/';

  return {
    query: function(type) {
      return $http({
        url: path + type + '.json',
        method: 'GET'
      });
    },
  }
}]);


