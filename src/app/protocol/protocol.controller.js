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
      date: '',
      vehiclesDamaged: 0, // ТС повреждено
      wounded: 0, // Раненных
      examination: false, // Освидетельствование
      propertyDamageOfVehicle: false, // Материальный ущерб ТС
      propertyDamage: false, // Другому имуществу
      witnesses: [ // Свидетели
        // {
        //   fullName: '',
        //   address: '',
        //   passport: '', // Номер и серия паспорта
        //   phone: '',
        //   email: ''
        // }
      ],
      executionOfTrafficAccident: false, // Оформление ДТП
      badgeNumber: '', // Номер нагрудного значка
      A: {
        driversLicense: '',
        certificateOfVehicleRegistration: '',
        vehicle: {
          carBrand: '',
          VIN: '', // 17 numbers
          carNumber: '',
          STSorPTS: ''
        },
        ownwer: {
          fullName: '',
          address: ''
        },
        driver: {
          fullName: '',
          birthday: '',
          address: '',
          phone: '',
          email: '',
          driversLicense: ''
        },
        category: '',
        dateOfIssueOfDrivingLicense: '',
        waybill: '',
        insurer: { // Страховщик
          vehicleIsInsured: false,
          investigativeCommitteeOfVictim: '',
          insurancePolicy: '',
          validUntil: ''
        },
        schemeOfAccident: '',
        damageDescription: '',
        additionalRemarks: ''
      },
      B: {
        driversLicense: '',
        certificateOfVehicleRegistration: '',
        vehicle: {
          carBrand: '',
          VIN: '', // 17 numbers
          carNumber: '',
          STSorPTS: ''
        },
        ownwer: {
          fullName: '',
          address: ''
        },
        driver: {
          fullName: '',
          birthday: '',
          address: '',
          phone: '',
          email: '',
          driversLicense: ''
        },
        category: '',
        dateOfIssueOfDrivingLicense: '',
        waybill: '',
        insurer: { // Страховщик
          vehicleIsInsured: false,
          investigativeCommitteeOfVictim: '',
          insurancePolicy: '',
          validUntil: ''
        },
        schemeOfAccident: '',
        damageDescription: '',
        additionalRemarks: ''
      },
      circumstances: {
        questions: [
          {
            id: 1,
            A: false,
            B: false
          }, {
            id: 2,
            A: false,
            B: false
          }, {
            id: 3,
            A: false,
            B: false
          }
        ],
        otherForDriverA: '',
        otherForDriverB: ''
      }
    };

    this.witnessesCount = this.europrotocol.witnesses.length;
    console.log(this.witnessesCount);

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

    this.$scope.$watch(() => this.witnessesCount, (newValue, oldValue) => {
      console.log(this.europrotocol.witnesses);

      if (newValue > oldValue) {
        this.europrotocol.witnesses.push({});
      } else if (newValue < oldValue) {
        this.europrotocol.witnesses.pop();
      }
    });
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
