type vehicle = {
  marca: string;
  year: number;
};

type car = {
  brand: vehicle['marca'];
  year: vehicle['year'];
  name: string;
};

const car: car = {
  brand: 'ford',
  year: 2020,
  name: 'fiesta',
};

console.log(car);
