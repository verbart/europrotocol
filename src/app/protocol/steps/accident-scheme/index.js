import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'Firestitch.angular-counter';
import 'ng-file-upload';

import router from './accident-scheme.router';

import AccidentScheme from './accident-scheme.factory';

import AccidentSchemeCtrl from './accident-scheme.controller';
import DirectionCtrl from './direction/direction.controller';
import SchemeCtrl from './scheme/scheme.controller';


angular.module('europrotocol.protocol.accident-scheme', [
  uiRouter,
  'Firestitch.angular-counter',
  'ngFileUpload'
])
  .config(router)

  .factory('AccidentScheme', AccidentScheme)

  .controller('AccidentSchemeCtrl', AccidentSchemeCtrl)
  .controller('DirectionCtrl', DirectionCtrl)
.controller('SchemeCtrl', SchemeCtrl);
