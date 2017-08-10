import angular from 'angular';
import uiRouter from 'angular-ui-router';

import router from './partners.router';
import PartnersCtrl from './partners.controller';
import ReadOneCtrl from './read-one/read-one.controller';


angular.module('europrotocol.admin.partners', [
  uiRouter
])
  .config(router)

  .controller('PartnersCtrl', PartnersCtrl)
  .controller('ReadOneCtrl', ReadOneCtrl);
