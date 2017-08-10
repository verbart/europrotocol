export default {
  templateUrl: 'views/components/navbar/navbar.html',
  controller: class {
    constructor(AuthService) {
      this.AuthService = AuthService;
    }
  }
}
