export class Car {
  private readonly motor = new Motor();
  powerOn(): void {
    this.motor.powerOn();
  }

  powerOf(): void {
    this.motor.powerOf();
  }
}

export class Motor {
  powerOn(): void {
    console.log('motor ligando.');
  }

  powerOf(): void {
    console.log('Motor desligando.');
  }
}

const car = new Car();

car.powerOf();
