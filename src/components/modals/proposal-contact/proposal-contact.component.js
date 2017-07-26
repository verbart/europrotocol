export default {
  templateUrl: 'views/components/modals/proposal-contact/proposal-contact.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function ($http, $stateParams, toaster, CONSTANT) {
    this.sendForm = (form) => {
      this.newAccident = form.$$controls.reduce((result, item) => {
        result[item.$name] = item.$modelValue || '';
        return result;
      }, {});

      angular.extend(this.newAccident, this.resolve.accident);
      this.newAccident.created = new Date().getTime();

      $http.post(
        `${CONSTANT.API_URL_V2}/partners`,
        this.newAccident,
        {
          headers: {
            token: $stateParams.token || '665AHD777JH37BB735141E346EEW'
          }
        }
      )
        .then(response => {
          this.close({$value: form});
        }, error => {
          console.log(error);
          toaster.error('Произошла ошибка! Пожалуйста, сообщите нам о ней')
        });
    };

    this.cancel = () => {
      this.dismiss({$value: false});
    };

    this.interacted = (field) => {
      return this.submitted || field.$dirty;
    };
  }
};
