export default function ($stateProvider) {
  $stateProvider
    .state('protocol.accident-scheme', {
      url: '/accident-scheme',
      templateUrl: 'views/app/protocol/steps/accident-scheme/accident-scheme.html',
      controller: 'AccidentSchemeCtrl',
      controllerAs: 'AccidentSchemeCtrl'
    })
      .state('protocol.accident-scheme.direction', {
        url: '/:direction',
        templateUrl: 'views/app/protocol/steps/accident-scheme/direction/direction.html',
        controller: 'DirectionCtrl',
        controllerAs: 'DirectionCtrl'
      })
        .state('protocol.accident-scheme.direction.scheme', {
          url: '/:scheme',
          templateUrl: 'views/app/protocol/steps/accident-scheme/scheme/scheme.html',
          controller: 'SchemeCtrl',
          controllerAs: 'SchemeCtrl'
        });
};
