const html = {
    tbody: document.querySelector("#tbody"),
    typeOfCar: document.querySelector("#typeOfCar"),
    brandOfCar: document.querySelector("#brandOfCar"),
    btnOne: document.querySelector("#btnOne"),
    table: document.querySelector("#table"),
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

html.btnOne.addEventListener('click', () => {
    const value = html.typeOfCar.value;
    const value1 = html.brandOfCar.value;
    html.tbody.innerHTML = '';
    fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/HOMEWORK/cars.json")
        .then((res) => res.json())
        .then((car) => {
            debugger
            // console.log(value);
            car.filter((car) => car.type === value).map(showCars(car))
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

// https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript