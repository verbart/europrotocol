export default function ($stateProvider) {
  $stateProvider
    .state('proposal', {
      url: '/?token',
      templateUrl: 'views/app/proposal/proposal.html',
      controller: 'ProposalCtrl',
      controllerAs: 'proposalCtrl'
    });
}
