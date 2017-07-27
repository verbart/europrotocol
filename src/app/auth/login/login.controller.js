export default class {
  constructor($rootScope, $state, AuthService, AuthData, AuthToken, CONSTANT) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.CONSTANT = CONSTANT;
    this.AuthService = AuthService;
    this.AuthData = AuthData;
    this.AuthToken = AuthToken;
    this.user = {};
    this.errorCode = null;
  }

  login() {
    this.AuthService.login(this.user).then(
      response => {
        console.log(response);
        const userData = response.data;

        this.$rootScope.__USER_ROLE = userData.role || 'moderator';

        this.errorCode = null;

        this.AuthData.set(userData);
        this.AuthToken.set(response.headers('token'));

        this.$state.go('admin');
      },
      error => {
        console.log(error);
        this.errorCode = error.status;
      }
    );
  }
}
