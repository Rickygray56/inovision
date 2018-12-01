var app = angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'app/views/pages/home.html'
    })

    .when('/about', {
        templateUrl: 'app/views/pages/about.html'
    })

    .when('/services', {
        templateUrl: 'app/views/pages/services.html'
    })

    .when('/lights', {
        templateUrl: 'app/views/pages/lights.html'
    })

    .when('/thermostats', {
        templateUrl: 'app/views/pages/thermostats.html'
    })

    .when('/voice', {
        templateUrl: 'app/views/pages/voice.html'
    })

    .when('/security', {
        templateUrl: 'app/views/pages/security.html'
    })

    .when('/hubs', {
        templateUrl: 'app/views/pages/hubs.html'
    })

    .when('/doorbells', {
        templateUrl: 'app/views/pages/doorbells.html'
    })

    .when('/cams', {
        templateUrl: 'app/views/pages/cams.html'
    })

    .when('/brands', {
        templateUrl: 'app/views/pages/brands.html'
    })

    .when('/book', {
        templateUrl: 'app/views/pages/book.html'
    })

    .when('/price', {
        templateUrl: 'app/views/pages/price.html'
    })
    
    .otherwise({ redirectTo: "/"});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});