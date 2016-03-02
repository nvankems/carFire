var app = angular.module('carFire', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('cars', {
            url: '/cars',
            templateUrl: '/templates/carTmpl.html',
            controller: 'carsCtrl',
            resolve: {
                carsRef: function(carService) {
                    return carService.getCars();
                }
            }
    })
        .state('car', {
            url: '/cars/:carId',
            templateUrl: '/templates/indCar.html',
            resolve: {
                carRef: function(carService, $stateParams) {
                    return carService.getCar($stateParams.carId);
                },
                commentsRef: function(carService, $stateParams) {
                    return carService.getComments($stateParams.carId);
                }
            }
        });




    $urlRouterProvider.otherwise('/cars');

})