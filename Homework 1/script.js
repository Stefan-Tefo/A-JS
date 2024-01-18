let tbody = document.getElementById("tbody").style.display = "none";

let type = document.getElementById('t-type')
let brand = document.getElementById('b-brand')

let btnOne = document.getElementById('btn-1')
let table = document.getElementById('table')
let carsData = null;

fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/HOMEWORK/cars.json")
    .then(function (res) {
        return res.json()
    })
    .then(function (body) {
        console.log(body);
        carsData = body
        showCars(carsData)
        showTypeOfCars(carsData)
        showBrandOfCars(carsData)

    })
    .catch(function (error) {
        console.log("ERROR", error);
    })
    .finally(function () {
        console.log("Succsess");
    });

function showCars(carsData) {

    tbody.innerHTML = ""
    if (!carsData) return;

    for (let car of carsData) {
        tbody.innerHTML += `
    <tr>
    <td>${car.type}</td>
    <td>${car.brand}</td>
    <td>${car.model}</td>
    <td>${car.doors}</td>
    <td>${car.gasType}</td>
    <td>${car.color}</td>
    <td>${car.isNew}</td>
    <td>${car.horsepower}</td>
    </tr>
    `
    }
}

btnOne.addEventListener('click', function (e) {
    e.preventDefault()

    // let value = type.value

    // if (!value) {
    //     "Enter a right option"
    // }

    fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/HOMEWORK/cars.json")
        .then(function (res) {
            return res.json()
        })
        .then(function (body) {
            carsData = body
            showTableFromTheOptions()
        })


})

function showTableFromTheOptions() {
    for (let car of carsData) {
        if (type.value === 'SUV' && 'Sedan') {
            tbody.innerHTML += `
            <tr>
            <td>${car.type}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.doors}</td>
            <td>${car.gasType}</td>
            <td>${car.color}</td>
            <td>${car.isNew}</td>
            <td>${car.horsepower}</td>
            </tr>
            `
        }
    }
}


function showTypeOfCars() {
    for (let car of carsData) {
        type.innerHTML += `
    <option>${car.type}</option>           
    `
    }
}

function showBrandOfCars() {
    for (let car of carsData) {
        brand.innerHTML += `
    <option>${car.brand}</option>
    `
    }
}

