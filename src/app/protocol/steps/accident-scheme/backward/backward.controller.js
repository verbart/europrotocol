export default class {
  constructor($http, $uibModal, toaster, CONSTANT) {
    this.$http = $http;
    this.toaster = toaster;
    this.CONSTANT = CONSTANT;
    this.$uibModal = $uibModal;

    console.log('It Works!');
  }
}
