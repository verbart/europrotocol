import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'angularjs-toaster';
import 'angular-ui-bootstrap';
import 'leaflet';
import 'angular-simple-logger';
import 'ui-leaflet';

import router from './proposal.router';
import ProposalCtrl from './proposal.controller';
import proposalContactModal from '../../components/modals/proposal-contact/proposal-contact.component';
import alertModal from '../../components/modals/alert/alert.component';
import Geocoding from '../../components/geocoding.service';


angular.module('europrotocol.proposal', [
  uiRouter,
  'toaster',
  'ui.bootstrap',
  'nemLogging',
  'ui-leaflet'
])
  .config(router)

  .controller('ProposalCtrl', ProposalCtrl)

  .component('proposalContactModal', proposalContactModal)
  .component('alertModal', alertModal)

  .service('Geocoding', Geocoding);
