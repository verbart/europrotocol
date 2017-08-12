import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'angularjs-toaster';
import 'angular-messages';

import router from './admin.router';
import AdminCtrl from './admin.controller';
import mainHeader from '../../components/main-header/main-header.component';
import mainNavbar from '../../components/navbar/navbar.component';

import './partners';


angular.module('europrotocol.admin', [
  uiRouter,
  'toaster',
  'ngMessages',

  'europrotocol.admin.partners'
])
  .config(router)

  .component('mainHeader', mainHeader)
  .component('mainNavbar', mainNavbar)

  .controller('AdminCtrl', AdminCtrl);
