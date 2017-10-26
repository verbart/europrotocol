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
          title: 'Выехал на сторону дороги предназначенную для встречного движения',
          A: false,
          B: false
        }, {
          title: 'Водитель отсутствовал на месте ДТП',
          A: false,
          B: false
        }, {
          title: 'Выезжая со стоянки, с места парковки, остановки, со двора, второстепенной дороги',
          A: false,
          B: false
        }, {
          title: 'Заезжал на стоянку, парковку, во двор',
          A: false,
          B: false
         }, {
          title: 'Двигался прямо (не маневрировал)',
          A: false,
          B: false
         }, {
          title: 'Двигался на перекрёстке',
          A: false,
          B: false
         }, {
          title: 'Заезжал на перекрёсток',
          A: false,
          B: false
         }, {
          title: 'Двигался по перекрёстку',
          A: false,
          B: false
         }, {
          title: 'Столкнулся с ТС, двигавшемя в том же направлении по той же полосе',
          A: false,
          B: false
        }, {
          title: 'Столкнулся с ТС, двигавшемя в том же направлении по другой полосе (в другом ряду)',
          A: false,
          B: false
        }, {
          title: 'Менял полосу (перестраивался в другой ряд)',
          A: false,
          B: false
        }, {
          title: 'Обгонял',
          A: false,
          B: false
        }, {
          title: 'Поворачивал направо',
          A: false,
          B: false
        }, {
          title: 'Поворачивал налево',
          A: false,
          B: false
        }, {
          title: 'Совершал разворот',
          A: false,
          B: false
        }, {
          title: 'Двигался задним ходом',
          A: false,
          B: false
        }, {
          title: 'Выехал на сторону дороги, предназначеную для встречного джвижения',
          A: false,
          B: false
        }, {
          title: 'Второе ТС находилось слева от меня',
          A: false,
          B: false
        }, {
          title: 'Не выполнил требования знака преоритета',
          A: false,
          B: false
        }, {
          title: 'Совершал наезд (на неподвижное ТС, препятствие, пешехода и т.п.)',
          A: false,
          B: false
        }, {
          title: 'Остановился (стоял) на запрещающий сигнал светофора)',
          A: false,
          B: false
        }
      ],
      otherForDriverA: '',
      otherForDriverB: ''
    };
  }
}
