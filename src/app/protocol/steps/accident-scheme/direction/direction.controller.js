export default class {
  constructor($stateParams, $state, toaster, AccidentScheme) {
    this.directions = AccidentScheme.directions;
    this.schemes = AccidentScheme.schemes;
    this.directionPath = $stateParams.direction;
    this.direction = this.directions.find(direction => direction.path === this.directionPath);

    if (!this.direction) {
      toaster.error(`Раздела схем "${this.directionPath}" не существует!`);
      $state.go(`protocol.accident-scheme`);
    }
  }
};
