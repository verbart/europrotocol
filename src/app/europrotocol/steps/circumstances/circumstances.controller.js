export default class {
  constructor($http, $uibModal, toaster, CONSTANT) {
    this.$http = $http;
    this.toaster = toaster;
    this.CONSTANT = CONSTANT;
    this.$uibModal = $uibModal;

    console.log('It Works!');

    this.circumstances = {
      questions: [
        {
          id: 1,
          title: 'Выехал на сторону дороги предназначенную для встречного движения',
          A: false,
          B: false
        }, {
          id: 2,
          title: 'Водитель отсутствовал на месте ДТП',
          A: false,
          B: false
        }, {
          id: 3,
          title: 'Выезжая со стоянки, с места парковки, остановки, со двора, второстепенной дороги',
          A: false,
          B: false
        }, {
          id: 4,
          title: 'Там 22 пункта, короче оформление такое:D',
          A: false,
          B: false
        }
      ],
      otherForDriverA: '',
      otherForDriverB: ''
    };
  }
}
