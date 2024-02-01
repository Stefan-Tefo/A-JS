const html = {
    tbody: document.querySelector("#tbody"),
    typeOfCar: document.querySelector("#typeOfCar"),
    brandOfCar: document.querySelector("#brandOfCar"),
    btnOne: document.querySelector("#btnOne"),
    table: document.querySelector("#table"),
    modelInput: document.querySelector("#modelInput"),
    resetBtn: document.querySelector("#resetBtn"),
    numberOfDoor: document.querySelector("#numberOfDoor"),
    gasType: document.querySelector("#gasType"),
    carColor: document.querySelector("#carColor"),
    newCar: document.querySelector("#newCar"),
    oldCar: document.querySelector("#oldCar"),
    horsePower: document.querySelector("#horse_power"),
}

function showAllCars() {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/HOMEWORK/cars.json")
        .then((res) => res.json())
        .then((car) => {
            showCars(car)
            showBrandOfCars(car)
            showTypeOfCars(car)

        })
        .catch((error) => console.log("ERROR", error))
        .finally(() => console.log("Success"));
}

html.resetBtn.addEventListener("click", () => {
    html.tbody.innerHTML = "";
    html.typeOfCar.value = "";
    html.brandOfCar.value = "";
    html.modelInput.value = "";
    html.numberOfDoor.value = "";
    html.gasType.value = "";
    html.carColor.value = "";
    html.horsePower.value = "";
    html.newCar.value = "";
    html.oldCar.value = "";
})

html.btnOne.addEventListener('click', () => {
    const value = html.typeOfCar.value;
    const value1 = html.brandOfCar.value;
    const value2 = html.modelInput.value;
    const value3 = html.numberOfDoor.value;
    const value4 = html.gasType.value;
    const value5 = html.carColor.value;
    // const value6 = html.newCar.value;
    // const value7 = html.oldCar.value;
    const value8 = html.horsePower.value;
    html.tbody.innerHTML = "";
    // if (!value2 || !value3 || !value5 || !value8) {
    //     alert("Inavlid input")
    // }
    fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/HOMEWORK/cars.json")
        .then((res) => res.json())
        .then((car) => {
            showCars(car.filter((car) => car.type === value))
            showCars(car.filter((car) => car.brand === value1))
            showCars(car.filter((car) => car.model.toLowerCase() === value2))
            showCars(car.filter((car) => car.doors === parseInt(value3)))
            showCars(car.filter((car) => car.gasType === value4))
            showCars(car.filter((car) => car.color.toLowerCase() === value5))
            // showCars(car.filter((car) => car.isNew === Boolean(value6)))
            // showCars(car.filter((car) => car.isNew === Boolean(value7)))
            showCars(car.filter((car) => car.horsepower === parseInt(value8)))
        })
})

function showCars(car) {
    car.forEach((car) => {
        html.tbody.innerHTML += createTable(car)
    });
}

function createTable(car) {
    return `
    <tr>
    <td>${car.type}</td>
    <td>${car.brand}</td>
    <td>${car.model}</td>
    <td>${car.doors}</td>
    <td>${car.gasType}</td>
    <td>${car.color}</td>
    <td>${car.isNew}</td>
    <td>${car.horsepower}</td>
    </tr> `
}

function showTypeOfCars(car) {
    car.forEach((car) => {
        html.typeOfCar.innerHTML += `<option>${car.type}</option>`;
    })
}

function showBrandOfCars(car) {
    car.forEach((car) => {
        html.brandOfCar.innerHTML += `<option>${car.brand}</option>`;
    })
}


showAllCars()

