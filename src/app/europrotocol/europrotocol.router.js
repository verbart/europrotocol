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
      templateUrl: 'views/app/europrotocol/steps/main-info/main-info.html',
      controller: 'MainInfoCtrl',
      controllerAs: 'miCtrl'
    });
}
