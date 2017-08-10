export default class {
  constructor($http, $stateParams, $state, toaster, CONSTANT) {
    this.$http = $http;
    this.$state = $state;
    this.toaster = toaster;
    this.CONSTANT = CONSTANT;
    this.locationOrigin = location.origin;
    this.partner = {};

    this.getPartner($stateParams.id);
  }

  getPartner(id) {
    this.$http.get(`${this.CONSTANT.API_URL_V2}/partners/${id}`)
      .then(response => {
        console.log(response);

        this.partners = response.data;
      }, error => {
        console.log(error);
        this.partner = {
          name: 'Name of partner',
          email: 'email@partner.com',
          token: 'Token'
        };
        // this.$state.go('admin.partners');
      });
  }
}
