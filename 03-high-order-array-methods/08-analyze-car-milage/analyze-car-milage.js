function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((total, car) => (total += car.mileage), 0);
  const averageMileage = Number((totalMileage / cars.length).toFixed(2));
  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );
  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage };
}

module.exports = analyzeCarMileage;
