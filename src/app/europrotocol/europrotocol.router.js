export default function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/europrotocol', '/europrotocol/main-info');

  $stateProvider
    .state('europrotocol', {
      url: '/europrotocol',
      templateUrl: 'views/app/europrotocol/europrotocol.html',
      controller: 'EuroprotocolCtrl',
      controllerAs: 'epCtrl'
    })
    .state('europrotocol.main-info', {
      url: '/main-info',
      templateUrl: 'views/app/europrotocol/steps/main-info/main-info.html'
    })
    .state('europrotocol.vehicle_A', {
      url: '/vehicle_A',
      templateUrl: 'views/app/europrotocol/steps/vehicle_A/vehicle_A.html'
    })
    .state('europrotocol.vehicle_B', {
      url: '/vehicle_B',
      templateUrl: 'views/app/europrotocol/steps/vehicle_B/vehicle_B.html'
    })
    .state('europrotocol.circumstances', {
      url: '/circumstances',
      templateUrl: 'views/app/europrotocol/steps/circumstances/circumstances.html',
      controller: 'CircumstancesCtrl',
      controllerAs: 'CircumstancesCtrl'
    });
}
