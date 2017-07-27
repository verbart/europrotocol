export default function ($stateProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin',
      templateUrl: 'views/app/admin/admin.html',
      controller: 'AdminCtrl',
      controllerAs: 'adminCtrl'
    });
}
