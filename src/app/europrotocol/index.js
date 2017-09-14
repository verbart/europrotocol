import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'angularjs-toaster';


import router from './europrotocol.router';
import EuroprotocolCtrl from './europrotocol.controller';


angular.module('europrotocol.europrotocol', [
  uiRouter
])
  .config(router)

  .controller('EuroprotocolCtrl', EuroprotocolCtrl);
