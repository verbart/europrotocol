import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'Firestitch.angular-counter';
import 'ng-file-upload';

import router from './accident-scheme.router';

import AccidentSchemeCtrl from './accident-scheme.controller';
import OneWayCtrl from './one-way/one-way.controller';


angular.module('europrotocol.protocol.accident-scheme', [
  uiRouter,
  'Firestitch.angular-counter',
  'ngFileUpload'
])
  .config(router)

  .controller('AccidentSchemeCtrl', AccidentSchemeCtrl)
  .controller('OneWayCtrl', OneWayCtrl);
