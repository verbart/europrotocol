export default function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/protocol', '/protocol/main-info');

  $stateProvider
    .state('protocol', {
      url: '/protocol',
      templateUrl: 'views/app/protocol/protocol.html',
      controller: 'ProtocolCtrl',
      controllerAs: 'ProtocolCtrl'
    })
    .state('protocol.main-info', {
      url: '/main-info',
      templateUrl: 'views/app/protocol/steps/main-info/main-info.html'
    })
    .state('protocol.vehicle_A', {
      url: '/vehicle_A',
      templateUrl: 'views/app/protocol/steps/vehicle_A/vehicle_A.html'
    })
    .state('protocol.vehicle_B', {
      url: '/vehicle_B',
      templateUrl: 'views/app/protocol/steps/vehicle_B/vehicle_B.html'
    })
    .state('protocol.circumstances', {
      url: '/circumstances',
      templateUrl: 'views/app/protocol/steps/circumstances/circumstances.html',
      controller: 'CircumstancesCtrl',
      controllerAs: 'CircumstancesCtrl'
    })
    .state('protocol.additional-circumstances', {
      url: '/additional-circumstances',
      templateUrl: 'views/app/protocol/steps/additional-circumstances/additional-circumstances.html',
      controller: 'AdditionalCircumstancesCtrl',
      controllerAs: 'AdditionalCircumstancesCtrl'
    })
    .state('protocol.photos', {
      url: '/photos',
      templateUrl: 'views/app/protocol/steps/photos/photos.html',
      controller: 'PhotosCtrl',
      controllerAs: 'PhotosCtrl'
    })
    .state('protocol.finishing', {
      url: '/finishing',
      templateUrl: 'views/app/protocol/steps/finishing/finishing.html',
      controller: 'FinishingCtrl',
      controllerAs: 'FinishingCtrl'
    });
}
