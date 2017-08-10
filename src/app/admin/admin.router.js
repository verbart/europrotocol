export default function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/admin', '/admin/partners');

  $stateProvider
    .state('admin', {
      url: '/admin',
      templateUrl: 'views/app/admin/admin.html',
      controller: 'AdminCtrl',
      controllerAs: 'adminCtrl'
    });
}
