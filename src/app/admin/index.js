import angular from 'angular';
import uiRouter from 'angular-ui-router';

import router from './admin.router';
import AdminCtrl from './admin.controller';


angular.module('avarcom.admin', [
  uiRouter
])
  .config(router)

  .controller('AdminCtrl', AdminCtrl);
