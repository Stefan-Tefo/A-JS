html = {
    container: document.querySelector(".container"),
    pagination: document.querySelector("#pagination"),
    search: document.querySelector("#search"),
    abv: document.querySelector("#abv"),
    srmLight: document.querySelector("#srmLight"),
    srmMedium: document.querySelector("#srmMedium"),
    srmDark: document.querySelector("#srmDark"),
    prevBtn: document.querySelector("#prevBtn"),
    nextBtn: document.querySelector("#nextBtn"),
}

let currentPage = 1;
let perPage = 25;

const nextPage = () => {
    html.container.innerHTML = ""
    currentPage++;
    showAllBearsList(currentPage)
}

const prevPage = () => {
    html.container.innerHTML = ""
    currentPage--;
    showAllBearsList(currentPage)
}

// function buttonsCheck(res) {
//     if (res.next === null) {
//         nextBtn.style.display = "none";
//     } else {
//         nextBtn.style.display = "block";
//     }
//     if (res.prev === null) {
//         prevBtn.style.display = "none";
//     } else {
//         prevBtn.style.display = "block";
//     }
// };

html.abv.addEventListener("input", () => {
    const isBelow = html.abv.checked
    fetch(`https://api.punkapi.com/v2/beers?abv_lt=6`)
        .then(res => res.json())
        .then((body) => {
            html.container.innerHTML = ""
            // if (isBelow) {
            //     showBeers(body = body.filter(body => body.abv >= 6));
            // }
            if (isBelow) {
                showBeers(body)
            }
        })
        .catch((error) => console.log("ERROR", error))
    if (!isBelow) {
        debugger
        html.container.innerHTML = ""
        showAllBearsList(currentPage)
    }
})

html.srmLight.addEventListener("input", () => {
    const light = html.srmLight.checked
    console.log(light);
    fetch(`https://api.punkapi.com/v2/beers?ebc_gt6`)
        .then(res => res.json())
        .then((body) => {
            html.container.innerHTML = ""
            // if (light) {
            //     showBeers(body = body.filter(body => body.srm >= 6));
            // }
            if (light) {
                showBeers(body)
            }
        })
        .catch((error) => console.log("ERROR", error))
    if (!light) {
        html.container.innerHTML = ""
        showAllBearsList(currentPage)
    }
})

html.srmMedium.addEventListener("input", () => {
    const medium = html.srmMedium.checked
    fetch(`https://api.punkapi.com/v2/beers?ebc_gt=9&ebc_lt=20`)
        .then(res => res.json())
        .then((body) => {
            html.container.innerHTML = ""
            // if (medium) {
            //     showBeers(body = body.filter(body => body.srm <= 9 || body.srm >= 20));
            // }
            if (medium) {
                showBeers(body)
            }
        })
        .catch((error) => console.log("ERROR", error))
    if (!medium) {
        html.container.innerHTML = ""
        showAllBearsList(currentPage)
    }
})

html.srmDark.addEventListener("input", () => {
    const dark = html.srmDark.checked
    fetch(`https://api.punkapi.com/v2/beers?ebc_gt=20&ebc_lt=40`)
        .then(res => res.json())
        .then((body) => {
            html.container.innerHTML = ""
            // if (dark) {
            //     showBeers(body = body.filter(body => body.srm >= 20 || body.srm >= 40));
            // }
            if (dark) {
                showBeers(body)
            }
        })
        .catch((error) => console.log("ERROR", error))
    if (!dark) {
        html.container.innerHTML = ""
        showAllBearsList(currentPage)
    }
})

html.search.addEventListener('input', () => {
    let value1 = html.search.value
    fetch(`https://api.punkapi.com/v2/beers`)
        .then(res => res.json())
        .then((body) => {
            html.container.innerHTML = ""
            showBeers(body.filter((body) => body.name ? body.name.toLowerCase() === value1 : true))
        })
        .catch((error) => console.log("ERROR", error))
})

function showAllBearsList(currentPage) {
    fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${perPage}`)
        .then(res => res.json())
        .then((body) => {
            showBeers(body)

        })
        .catch((error) => console.log("ERROR", error))
}

pagination.addEventListener('change', function () {
    perPage = pagination.value
    html.container.innerHTML = ""
    fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${perPage}`)
        .then(res => res.json())
        .then((body) => {
            showBeers(body)
        })
        .catch((error) => console.log("ERROR", error))
})

showAllBearsList(currentPage)

function showBeers(beer) {
    beer.forEach((beer) => {
        html.container.innerHTML += createTable(beer)
    });
}

function createTable(beer) {
    return `
        <div class="beer_menu">
        <p>${beer.name}</p>
        <img src="${beer.image_url}" alt="${beer.name}" id="item3"/>
        <p>Food: ${beer.food_pairing.join(", ")}</p>
        </div>
        `
}
nextBtn.addEventListener("click", nextPage)
prevBtn.addEventListener("click", prevPage)