export default class {
  constructor($scope, $http, $uibModal, toaster, CONSTANT, Geocoding) {
    this.$scope = $scope;
    this.$http = $http;
    this.toaster = toaster;
    this.CONSTANT = CONSTANT;
    this.locationIsDetected = false;
    this.Geocoding = Geocoding;
    this.$uibModal = $uibModal;

    this.progress = 0;
    this.warningMessageOfGPSisShowed = false;
    this.value = 0;

    const europrotocol = {
      address: '',
      date: 347392938,
      vehiclesDamaged: 0, // ТС повреждено
      wounded: 0, // Раненных
      examination: false, // Освидетельствование
      propertyDamageOfVehicle: false, // Материальный ущерб ТС
      propertyDamage: false, // Другому имуществу
      witnesses: [ // Свидетели
        {
          fullName: '',
          address: '',
          passport: '', // Номер и серия паспорта
          phone: '',
          email: ''
        }
      ],
      executionOfTrafficAccident: true, // Оформление ДТП
      badgeNumber: 88 // Номер нагрудного значка
    };

    navigator.geolocation.getCurrentPosition(function(position) {

    });
  }

  onLocationFound(e) {
    this.locationIsDetected = true;

  }
  onLocationError(e) {
    console.log(e);

    this.locationIsDetected = true;

    if (!this.warningMessageOfGPSisShowed) {
      this.$uibModal.open({
        component: 'alertModal',
        size: 'xs',
        resolve: {
          message: () => `
            Не удалось подключится к спутникам,
            попробуем определить Ваше местоположение с помощью интернет соединения
          `
        }
      }).result.then(result => {}, () => {
        console.info('modal-component dismissed at: ' + new Date());
      }).then(() => {
        this.warningMessageOfGPSisShowed = true;
      }).finally(() => {
        this.geolocationByGoogle();
      });
    } else {
      this.geolocationByGoogle();
    }
  }
  geolocationByGoogle() {
    this.$http.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${this.CONSTANT.GOOGLE_API_KEY}`)
      .then(response => {
        console.log(response);

        this.onLocationFound({
          accuracy: response.data.accuracy,
          latlng: response.data.location
        });
      }, error => {
        console.log(error);

        this.toaster.error('Не удалось определить местоположение, проверьте актуальность сетевых интерфейсов')
      });
  }
}
