import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'Firestitch.angular-counter';
import 'ng-file-upload';

import router from './europrotocol.router';
import EuroprotocolCtrl from './europrotocol.controller';
import MainInfoCtrl from './steps/main-info/main-info.controller';
import CounterComponent from '../../components/counter/counter.component';


angular.module('europrotocol.europrotocol', [
  uiRouter,
  'Firestitch.angular-counter',
  'ngFileUpload'
])
  .config(router)

  .controller('EuroprotocolCtrl', EuroprotocolCtrl)
  .controller('MainInfoCtrl', MainInfoCtrl)
  .component('counter', CounterComponent);
