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

function buttonsCheck(res) {
    if (res.next === null) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
    if (res.prev === null) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }
};

html.abv.addEventListener("input", () => {
    const isBelow = html.abv.checked
    fetch(`https://api.punkapi.com/v2/beers`)
        .then(res => res.json())
        .then((body) => {
            html.container.innerHTML = ""
            if (isBelow) {
                showBeers(body = body.filter(body => body.abv >= 6));
            }
        })
        .catch((error) => console.log("ERROR", error))
})

html.srmLight.addEventListener("input", () => {
    const light = html.srmLight.checked
    fetch(`https://api.punkapi.com/v2/beers`)
        .then(res => res.json())
        .then((body) => {
            html.container.innerHTML = ""
            if (light) {
                showBeers(body = body.filter(body => body.srm >= 6));
            }
        })
        .catch((error) => console.log("ERROR", error))
})

html.srmMedium.addEventListener("input", () => {
    const medium = html.srmMedium.checked
    fetch(`https://api.punkapi.com/v2/beers`)
        .then(res => res.json())
        .then((body) => {
            html.container.innerHTML = ""
            if (medium) {
                showBeers(body = body.filter(body => body.srm <= 9 || body.srm >= 20));
            }
        })
        .catch((error) => console.log("ERROR", error))
})

html.srmDark.addEventListener("input", () => {
    const dark = html.srmDark.checked
    fetch(`https://api.punkapi.com/v2/beers`)
        .then(res => res.json())
        .then((body) => {
            html.container.innerHTML = ""
            if (dark) {
                showBeers(body = body.filter(body => body.srm >= 12 || body.srm >= 40));
            }
        })
        .catch((error) => console.log("ERROR", error))
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
    fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=25`)
        .then(res => res.json())
        .then((body) => {
            showBeers(body)
            pagination.addEventListener('change', function () {
                let value = pagination.value
                html.container.innerHTML = ""
                fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${value}`)
                    .then(res => res.json())
                    .then((body) => {
                        showBeers(body)
                        // html.abv = uncheacked
                    })
                    .catch((error) => console.log("ERROR", error))
            })
        })
        .catch((error) => console.log("ERROR", error))
}

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