function countCar() {
    let carCounter = 18;
    const maxCars = 25;

    while (carCounter < maxCars) {
        window.alert("Car no. " + carCounter + " is entering");
        carCounter += 1;
    }

    window.alert("Full Parking");
}