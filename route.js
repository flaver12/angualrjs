angular.module('routeTest')

.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/events/', {
      templateUrl: 'events2.html',
      controller: 'EventsController'
    })
    .when('/events/:eventId', {
      templateUrl: 'partial/events.html',
      controller: 'EventsController'
    })
     .when('/Book/:bookId', {
      templateUrl: 'book.html',
      controller: 'BookController'
//      resolve: {
//        // I will cause a 1 second delay
//        delay: function($q, $timeout) {
//          var delay = $q.defer();
//          $timeout(delay.resolve, 1000);
//          return delay.promise;
//        }
//      }
    })
    .when('/Book/:bookId/ch/:chapterId', {
      templateUrl: 'chapter.html',
      controller: 'ChapterController'
    }).otherwise({
        redirectTo: '/'
      });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  });