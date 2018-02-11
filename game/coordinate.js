class Coordinate {
  
  static make(x, y) {
    return new Coordinate(x, y);
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}


module.exports = Coordinate