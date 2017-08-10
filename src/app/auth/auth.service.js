export default class {
  constructor($http, $localStorage, CONSTANT, AuthData) {
    this.$http = $http;
    this.$localStorage = $localStorage;
    this.CONSTANT = CONSTANT;
    this.AuthData = AuthData;
  }

  login(user) {
    return this.$http.post(`${this.CONSTANT.API_URL_V2}/login`, user);
  }
  getUserRole() {
    return this.AuthData.get('type');
  }
  isUserRole(...roles) {
    return !!roles.filter(role => role === this.getUserRole()).length
  }
  logout() {
    this.$localStorage.$reset();
  }
  confirmToken() {
    return this.$http.get(`${this.CONSTANT.API_URL_V2}/auth-confirmation`)
  }
}
