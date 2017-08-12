export default class {
  constructor($http, $uibModal, toaster, CONSTANT) {
    this.$http = $http;
    this.toaster = toaster;
    this.$uibModal = $uibModal;
    this.CONSTANT = CONSTANT;
    this.partners = [];
    this.newPartner = {};
    this.locationOrigin = location.origin;

    this.getPartners();
  }

  getPartners() {
    this.$http.get(`${this.CONSTANT.API_URL_V2}/partners`)
      .then(response => {
        console.log(response);

        this.partners = response.data;
      }, error => {
        console.log(error);
      });
  }

  addPartner() {
    const modalInstance = this.$uibModal.open({
      component: 'newPartnerModal',
      size: 'xs'
    });

    modalInstance.result.then(partner => {
      console.log(partner);
      this.toaster.success('Добавлен новый партнёр!');
      this.partners.push(partner);
    }, () => {
      console.info('modal-component dismissed at: ' + new Date());
    });
  }
}
