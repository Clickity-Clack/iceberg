class Placement {

  static get ROTATION() {
    return {
      MIDNIGHT: 'MIDNIGHT'
    }
  }

  static get SIDE() {
    return {
      A: 'A'
    }
  }

  static make(aNameString, aCoordinate, aRotationEnum, aSideEnum) {
    return new Placement(aNameString, aCoordinate, aRotationEnum, aSideEnum)
  }

  constructor(aNameString, aCoordinate, aRotationEnum, aSideEnum) {
    this.name = aNameString
    this.coordinte = aCoordinate
    this.rotation = aRotationEnum
    this.side = aSideEnum
  }

}

module.exports = Placement