export default class {
  constructor($http, toaster, CONSTANT) {
    this.$http = $http;
    this.toaster = toaster;
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
    this.$http.post(`${this.CONSTANT.API_URL_V2}/partners/new-partner`, this.newPartner)
      .then(response => {
        console.log(response);

        this.newPartner = {};
        this.partners.push(response.data);
      }, error => {
        console.log(error);
      });
  }
}
