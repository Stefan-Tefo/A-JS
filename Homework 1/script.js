const html = {
    tbody: document.querySelector("#tbody"),
    typeOfCar: document.querySelector("#typeOfCar"),
    brandOfCar: document.querySelector("#brandOfCar"),
    btnOne: document.querySelector("#btnOne"),
    table: document.querySelector("#table"),
    modelInput: document.querySelector("#modelInput"),
    resetBtn: document.querySelector("#resetBtn"),
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
    html.typeOfCar.value = ""
    html.brandOfCar.value = ""
    html.modelInput.value = ""
    showAllCars()
})

html.btnOne.addEventListener('click', () => {
    debugger
    const value = html.typeOfCar.value;
    const value1 = html.brandOfCar.value;
    const value2 = html.modelInput.value;
    if (!value || !value1 || !value2) {
        alert("Invalid input")
        showAllCars()
    }

    html.tbody.innerHTML = '';
    fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/HOMEWORK/cars.json")
        .then((res) => res.json())
        .then((car) => {
            debugger
            showCars(car.filter((car) => car.type === value))
            showCars(car.filter((car) => car.brand === value1))
            showCars(car.filter((car) => car.model.toLowerCase() === value2))
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

