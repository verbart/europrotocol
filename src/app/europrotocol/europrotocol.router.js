export default function ($stateProvider) {
  $stateProvider
    .state('europrotocol', {
      url: '/europrotocol',
      templateUrl: 'views/app/europrotocol/europrotocol.html',
      controller: 'EuroprotocolCtrl',
      controllerAs: 'epCtrl'
    });
}
