/* eslint-disable no-underscore-dangle */
class Car {
  constructor(car) {
    this.speed = 0;
    this.price = car.price;
    this.maxSpeed = car.maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  static getSpecs(car) {
    console.log(`max.speed: ${car.speed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance},
    price: ${car.price}, max.speed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (value + this.speed <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (value - this.speed >= 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
