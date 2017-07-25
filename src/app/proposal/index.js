import angular from 'angular';
import uiRouter from 'angular-ui-router';

import router from './proposal.router';
import ProposalCtrl from './proposal.controller';
import proposalContactModal from '../../components/modals/proposal-contact/proposal-contact.component';
import alertModal from '../../components/modals/alert/alert.component';

import 'angular-ui-bootstrap';
import 'leaflet';
import 'angular-simple-logger';
import 'ui-leaflet';


angular.module('avarcom.proposal', [
  uiRouter,
  'ui.bootstrap',
  'nemLogging',
  'ui-leaflet'
])
  .config(router)

  .controller('ProposalCtrl', ProposalCtrl)

  .component('proposalContactModal', proposalContactModal)
  .component('alertModal', alertModal);
