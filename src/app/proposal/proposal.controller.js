export default class {
  constructor($http, $scope, $uibModal, leafletData, toaster, CONSTANT, Geocoding) {
    this.$http = $http;
    this.toaster = toaster;
    this.CONSTANT = CONSTANT;
    this.locationIsDetected = false;
    this.Geocoding = Geocoding;
    this.$uibModal = $uibModal;
    this.leafletData = leafletData;
    this.newAccident = {};
    this.map = {
      center: {
        lat: 0,
        lng: 0,
        zoom: 18
      },
      markers: {
        newAccident: {
          lat: 0,
          lng: 0,
          draggable: true,
          icon: {
            iconUrl: 'images/icons/flag.png',
            iconSize: [32, 32],
            iconAnchor: [0, 32],
            popupAnchor: [0, -16]
          }
        }
      }
    };
    this.radiusCircle = {};
    this.warningMessageOfGPSisShowed = false;

    leafletData.getMap('mainMap').then((map) => {
      this.lMap = map;

      map.on('locationfound', (e) => this.onLocationFound(e));
      map.on('locationerror', (e) => this.onLocationError(e));
      map.on('move', () => this.moveAccidentMarker(map.getCenter()));
      map.on('moveend', () => this.getAddress(map.getCenter()));

      $scope.$on('leafletDirectiveMap.mainMap.click', (event, args) => {
        this.updateAccindentPosition(args.leafletEvent.latlng);
      });

      $scope.$on('leafletDirectiveMarker.mainMap.dragend', (event, args) => {
        this.updateAccindentPosition(args.leafletEvent.target._latlng);
      });

      this.detectLocation();
    });
  }

  moveAccidentMarker(latlng) {
    this.map.markers['newAccident'].lat = latlng.lat;
    this.map.markers['newAccident'].lng = latlng.lng;
  }

  moveMap(latlng) {
    this.map.center.lat = latlng.lat;
    this.map.center.lng = latlng.lng;
  }

  updateAccindentPosition(latlng) {
    this.moveMap(latlng);
    this.getAddress(latlng);
  }

  detectLocation() {
    this.lMap.locate({
      setView: true,
      maxZoom: 18,
      // enableHighAccuracy: true,
      // watch: true
    });
  }

  onSelectAddressTypeahead(item) {
    this.moveMap(item.geometry.location);
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

    if (this.warningMessageOfGPSisShowed) {
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

  openContactModal(type) {
    this.newAccident.type = type;

    this.$uibModal.open({
      component: 'proposalContactModal',
      size: 'xs',
      resolve: {
        accident: () => this.newAccident
      }
    }).result.then(result => {
      this.toaster.success('Заявка отправлена. Ожидайте звонок на указанный номер');
      this.newAccident = {};
    }, () => {
      console.info('modal-component dismissed at: ' + new Date());
    });
  }

  getAddress(latlng) {
    this.Geocoding.getAddress(latlng, response => {
      angular.extend(this.newAccident, {
        address: response,
        lat: latlng.lat,
        lon: latlng.lng
      });
    });
  }

  searchLocations(value) {
    const bounds = this.accidentBounds;

    return this.$http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json',
      params: {
        key: this.CONSTANT.GOOGLE_API_KEY,
        address: value,
        bounds: `${bounds.f.b},${bounds.b.b}|${bounds.f.f},${bounds.f.b}`,
        language: 'ru'
      }
    }).then(response => {
      return response.data.results.slice(0, 5);
    }, error => {
      console.log(error);
    });
  }
}
