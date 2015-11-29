angular.module('PodcastService', []).factory('Podcast', ['$http',
  function($http) {
  return {
    get : function() {
      return $http.get('/api/podcasts');
    },

    create : function(podcastData) {
      return $http.post('/api/podcasts', podcastData);
    },

    delete : function(id) {
      return $http.delete('/api/podcasts/' + id);
    }
  }
}]);
