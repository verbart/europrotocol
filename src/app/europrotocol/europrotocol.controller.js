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

    console.log('It Works!');

    this.europrotocol = {
      address: '',
      date: 347392938,
      vehiclesDamaged: 1, // ТС повреждено
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

    const witnessesCount = this.europrotocol.witnesses.length;

    window.onbeforeunload = function (evt) {
      const message = 'Документ не сохранён. После закрытия страницы, все данные будут утеряны.';

      if (typeof evt == "undefined") {
        evt = window.event;
      }
      if (evt) {
        evt.returnValue = message;
      }

      return message;
    }
  }

  onFileSelect(files) {
    console.log(files);

    this.$http({
      method: 'POST',
      url: 'https://cors-anywhere.herokuapp.com/https://cloud.ocrsdk.com/processMRZ',
      headers : {
        'Content-Type': files[0].type
      },
      data: {'files[]': files[0]}
    }, response => {
      console.log(response);
      // this.progress = Math.round(100);
      // this.$scope.$apply();
    }, error => {
      console.log(error);
    });
  }

  onLocationFound(e) {
    this.locationIsDetected = true;
    const radius = Math.round(e.accuracy / 2);
    this.accidentBounds = new google.maps.Circle({
      center: e.latlng,
      radius: radius+2000
    }).getBounds();

    this.map.center.lat = e.latlng.lat;
    this.map.center.lng = e.latlng.lng;

    this.map.markers['user'] = {
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      message: `Ваше местоположение предположительно в радиусе ${radius}м`,
      focus: true
    };

    this.lMap.removeLayer(this.radiusCircle);
    this.radiusCircle = L.circle(e.latlng, radius).addTo(this.lMap);
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
        this.geoLoacatebyGoogle();
      });
    } else {
      this.geoLoacatebyGoogle();
    }
  }

  geoLoacatebyGoogle() {
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
