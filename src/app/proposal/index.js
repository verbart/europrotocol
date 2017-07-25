import angular from 'angular';
import uiRouter from 'angular-ui-router';

import router from './proposal.router';
import ProposalCtrl from './proposal.controller';
import proposalContactModal from '../../components/modals/proposal-contact/proposal-contact.component';

import 'angular-ui-bootstrap';
import 'leaflet';
import 'angular-simple-logger';
import 'leaflet.gridlayer.googlemutant';
import 'ui-leaflet';
import 'ui-leaflet-layers';


angular.module('avarcom.proposal', [
  uiRouter,
  'ui.bootstrap',
  'ui-leaflet'
])
  .config(router)

  .controller('ProposalCtrl', ProposalCtrl)
  .component('proposalContactModal', proposalContactModal);
