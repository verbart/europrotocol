export default function ($stateProvider) {
  $stateProvider
    .state('protocol.accident-scheme', {
      url: '/accident-scheme',
      templateUrl: 'views/app/protocol/steps/accident-scheme/accident-scheme.html',
      controller: 'AccidentSchemeCtrl',
      controllerAs: 'AccidentSchemeCtrl'
    })
    .state('protocol.accident-scheme.one-way', {
      url: '/one-way',
      templateUrl: 'views/app/protocol/steps/accident-scheme/one-way/one-way.html'
    })
      .state('protocol.accident-scheme.one-way.scheme', {
        url: '/scheme',
        templateUrl: 'views/app/protocol/steps/accident-scheme/one-way/scheme/scheme.html'
      })
    .state('protocol.accident-scheme.backward', {
      url: '/backward',
      templateUrl: 'views/app/protocol/steps/accident-scheme/backward/backward.html'
    });
}
