class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  Plus(x, y) {
    return new Vector((x = this.x + x), (y = this.y + y));
  }

  //Note we can use one param for the same result
  plus2(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  Minus(x, y) {
    return new Vector((x = this.x - x), (y = this.y - y));
  }

  Minus2(other) {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.floor(Math.sqrt(this.x * this.x + this.y * this.y));
  }
}

let vec = new Vector(1, 2);

console.log(vec.Plus(2, 3));
// console.log(vec.plus2(1, 2))
console.log(new Vector(1, 2).plus2(new Vector(2, 3)));
console.log(new Vector(1, 2).Minus2(new Vector(2, 3)));
console.log(vec.Minus(2, 3));

// console.log(vec.Minus2(2,3))

console.log(new Vector(3, 4).length);
