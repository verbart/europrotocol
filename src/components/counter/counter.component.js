export default {
  templateUrl: 'views/components/counter/counter.html',
  bindings: {
    min: '<?',
    max: '<?',
    step: '<?',
    result: '=?',
    onUpdate: '&'
  },
  controller: class {
    constructor() {
      this.$onInit = function () {
        this.min = angular.isDefined(this.min) ? this.min : 0;
        this.result = angular.isDefined(this.result) ? this.result : 0;
        this.step = angular.isDefined(this.step) ? this.step : 1;
      }
    }
    willGoAboveMax() {
      return this.result + this.step >= this.max;
    }
    willGoBelowMin() {
      return this.result - this.step <= this.min;
    }
  }
};
