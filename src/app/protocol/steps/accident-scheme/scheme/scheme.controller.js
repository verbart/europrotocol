export default class {
  constructor($stateParams, $state, toaster, AccidentScheme) {
    this.schemes = AccidentScheme.schemes;
    this.schemeNumber = $stateParams.scheme;
    this.directionPath = $stateParams.direction;
    this.direction = AccidentScheme.directions.find(direction => direction.path === this.directionPath);
    this.scheme = this.schemes.find(scheme => scheme.number === this.schemeNumber);

    if (this.direction) {
      if (!this.scheme) {
        toaster.error(`Схемы с номером ${this.schemeNumber} не существует!`);
        $state.go(`protocol.accident-scheme.direction`, {direction: this.directionPath});
      } else if (this.scheme.direction !== this.directionPath) {
        toaster.error(`В направлении "${this.direction}" не существует схемы "${this.schemeNumber}"!`);
        $state.go(`protocol.accident-scheme`);
      }
    }
  }
};
