export default {
  templateUrl: 'views/components/modals/new-partner/new-partner.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: class {
    constructor($http, toaster, CONSTANT) {
      this.$http = $http;
      this.toaster = toaster;
      this.CONSTANT = CONSTANT;

      this.$onInit = () => {
        this.partner = {};
      };
    }

    interacted(field) {
      return this.submitted || field.$dirty;
    }
    addPartner() {
      this.$http.post(`${this.CONSTANT.API_URL_V2}/partners/new-partner`, this.partner)
        .then(response => {
          console.log(response);

          this.close({$value: response.data});
        }, error => {
        console.log(error);

        switch(error.status) {
          case 409:
            this.toaster.error('Партнёр с такой почтой или именем уже существует!');
            break;
          case 400:
            this.toaster.error('Не корректное заполнение формы, проверьте и попробуйте ещё раз!');
            break;
          default:
            this.toaster.error('Произошла ошибка, пожалуйста, сообщите нам о ней!');
        }
      });
    }
    cancel() {
      this.dismiss({$value: 'cancel'});
    }
  }
};
