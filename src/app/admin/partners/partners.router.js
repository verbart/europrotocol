export default function ($stateProvider) {
  $stateProvider
    .state('admin.partners', {
      url: '/partners',
      templateUrl: 'views/app/admin/partners/partners.html',
      controller: 'PartnersCtrl',
      controllerAs: 'partnersCtrl'
    })
    .state('admin.partners.readOne', {
      url: '/:id',
      templateUrl: 'views/app/admin/partners/read-one/read-one.html',
      controller: 'ReadOneCtrl',
      controllerAs: 'readOne'
    });
}
