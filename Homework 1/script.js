let tbody = document.getElementById("tbody")            //.style.display = "none";

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
        // showCars(carsData)
        /* 
            Испраќаш аргументи во повикот на двете функции - showTypeOfCars и showBrandOfCars,
            но во дефиницијата на функцијата не очекуваш аргументи. 
            Прочитај го коментарот на 50та линија, од иста природа е.
        */
        showTypeOfCars(carsData)
        showBrandOfCars(carsData)

    })
    .catch(function (error) {
        console.log("ERROR", error);
    })
    .finally(function () {
        console.log("Success");
    });


btnOne.addEventListener('click', function () {

    // let value = type.value
    // if (!value) {
    //     alert("Enter a right option")
    // }
    showTableFromTheOptions()
})

function showTableFromTheOptions() {
    /* Земи ја вредноста на опцијата која е селетирана, стави debugger за да видиш што вредност има type (https://stackoverflow.com/a/1085810) */
    if (type === 'SUV') {
        /* 
            Очекуваш аргумент во дефиницијата на функцијата showCars, но овде не испраќаш аргументи.
            Но, размисли, дали имаме потреба да ја испраќаме carsData како аргумент ако е глобална варијабла?
            Дали имаме пристап до глобални варијабли низ функциите?
        */
        showCars() 
    }
}

function showCars(carsData) {

    // tbody.innerHTML = ""
    // if (!carsData) return;

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

function showTypeOfCars() {
    for (let car of carsData) {
        type.innerHTML += `<option>${car.type}</option>`
    }
}

function showBrandOfCars() {
    for (let car of carsData) {
        brand.innerHTML += `<option>${car.brand}</option>`
    }
}

