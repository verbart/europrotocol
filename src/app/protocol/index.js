import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'Firestitch.angular-counter';
import 'ng-file-upload';

import './steps/accident-scheme';

import router from './protocol.router';
import ProtocolCtrl from './protocol.controller';
import CircumstancesCtrl from './steps/circumstances/circumstances.controller';
import AccidentSchemeCtrl from './steps/accident-scheme/accident-scheme.controller';
import AdditionalCircumstancesCtrl from './steps/additional-circumstances/additional-circumstances.controller';
import PhotosCtrl from './steps/photos/photos.controller';

import CounterComponent from '../../components/counter/counter.component';
import ProtocolHeaderComponent from '../../components/protocol-header/protocol-header.component';


angular.module('europrotocol.protocol', [
  uiRouter,
  'Firestitch.angular-counter',
  'ngFileUpload',

  'europrotocol.protocol.accident-scheme'
])
  .config(router)

  .controller('ProtocolCtrl', ProtocolCtrl)
  .controller('CircumstancesCtrl', CircumstancesCtrl)
  .controller('AccidentSchemeCtrl', AccidentSchemeCtrl)
  .controller('AdditionalCircumstancesCtrl', AdditionalCircumstancesCtrl)
  .controller('PhotosCtrl', PhotosCtrl)

  .component('counter', CounterComponent)
  .component('protocolHeader', ProtocolHeaderComponent);
