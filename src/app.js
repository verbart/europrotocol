import angular from 'angular';

import 'smartbanner.js/dist/smartbanner.min';

import './app/proposal';
import './app/protocol';
import './app/admin';
import './app/auth';


angular.module('europrotocol', [
  'europrotocol.protocol',
  'europrotocol.proposal',
  'europrotocol.admin',
  'europrotocol.auth'
])
  .constant('CONSTANT', {
    API_URL: 'https://avarkom.pw/api/v2',
    API_URL_V2: 'https://avarkom.pw/control',
    GOOGLE_API_KEY: 'AIzaSyDzQsbRa6fyUb9SHNuIGrUPMj3_zjAMJtM'
  })

  .config(function (
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    $urlMatcherFactoryProvider
  ) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider.state('404', {
      url: '/404',
      templateUrl: 'views/app/errors/404.html'
    });

    $urlRouterProvider.otherwise('/404');
  });
