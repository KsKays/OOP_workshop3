/* ------ Shape ------ */
class Shape {
  color = "";
  filled = false;
  constructor(color, filled) {
    this.color = color;
    this.filled = filled;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
  isFilled() {
    return this.filled;
  }
  setFilled(filled) {
    this.filled = filled;
  }
  toString() {
    return `Shape [color = ${this.color}, filled = ${this.filled}]`;
  }
}

/* ------ Circle ------ */
class Circle extends Shape {
  radius = 1.0;
  constructor(color, filled, radius = 1.0) {
    super(color, filled);
    this.radius = radius;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  getArea() {
    return 3.14 * this.radius * this.radius;
  }
  getPerimeter() {
    return 2 * 3.14 * this.radius;
  }
  toString() {
    return `Circle [Shape[color = ${this.color}, filled = ${this.filled}, radius = ${this.radius}]]`;
  }
}

/* ------ Rectangle ------ */
class Rectangle extends Shape {
  width = 1.0;
  length = 1.0;
  constructor(color, filled, width = 1.0, length = 1.0) {
    super(color, filled);
    this.width = width;
    this.length = length;
  }
  getWidth() {
    return this.width;
  }
  setWidth(width) {
    this.width = width;
  }
  getLength() {
    return this.length;
  }
  setLength(length) {
    this.length = length;
  }
  getArea() {
    return this.width * this.length;
  }
  getPerimeter() {
    return 2 * this.length + 2 * this.width;
  }
  toString() {
    return `Rectangle [Shape [color = ${this.color}, filled = ${this.filled}, width = ${this.width}, length = ${this.length}]]`;
  }
}

/* ------ Square ------ */
class Square extends Rectangle {
  constructor(color = "red", filled = true, side = 1.0) {
    super(color, filled, side, side);
  }

  getSide() {
    return this.width;
  }

  setSide(side) {
    this.setWidth(side);
    this.setLength(side);
  }

  setWidth(side) {
    super.setWidth(side);
    this.setLength(side);
  }

  setLength(side) {
    super.setLength(side);
    this.length = side;
  }

  toString() {
    return `Square [Rectangle[ Shape [ color = ${this.color}, filled = ${this.filled}], width = ${this.width}, length = ${this.length}]]`;
  }
}

/* ------ Main ------ */
const main = () => {
  const shape = new Shape("blue", true);
  console.log(shape.toString());

  const circle = new Circle("green", false, 5.0);
  console.log(circle.toString());

  const rectangle = new Rectangle("purple", true, 3.0, 7.0);
  console.log(rectangle.toString());

  const square = new Square("yellow", false, 4.0);
  console.log(square.toString());
};

main();