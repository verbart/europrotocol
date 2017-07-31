import angular from 'angular';

import 'smartbanner.js/dist/smartbanner.min';
import 'angularjs-toaster';

import Geocoding from './components/geocoding.service';

import './app/proposal';
import './app/admin';
import './app/auth';


angular.module('avarcom', [
  'toaster',

  'avarcom.proposal',
  'avarcom.admin',
  'avarcom.auth'
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
  })

  .service('Geocoding', Geocoding);
