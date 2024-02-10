html = {
    container: document.querySelector(".container"),
    pagination: document.querySelector("#pagination"),
    search: document.querySelector("#search"),
    abv: document.querySelector("#abv")
}


function abvFilter(beer) {
    const isBelow = html.abv.checked                       //rabotam na filterot ne raboti
    if (isBelow) {
        beer = beer.filter(beer => beer.abv >= 6);
    }
}

html.search.addEventListener('input', () => {
    let value1 = html.search.value
    console.log(value1);
    fetch(`https://api.punkapi.com/v2/beers`)
        .then(res => res.json())
        .then((body) => {
            html.container.innerHTML = ""
            showBeers(body.filter((body) => body.name ? body.name.toLowerCase() === value1 : true))
        })
        .catch((error) => console.log("ERROR", error))
})
function showAllBearsList() {
    fetch(`https://api.punkapi.com/v2/beers?page=2&per_page=25`)
        .then(res => res.json())
        .then((body) => {
            showBeers(body)
            pagination.addEventListener('change', function () {
                let value = pagination.value
                html.container.innerHTML = ""
                fetch(`https://api.punkapi.com/v2/beers?page=2&per_page=${value}`)
                    .then(res => res.json())
                    .then((body) => {
                        showBeers(body)
                        showBeers(html.abv.addEventListener("input", abvFilter()))
                    })
                    .catch((error) => console.log("ERROR", error))
            })
        })
        .catch((error) => console.log("ERROR", error))
}

showAllBearsList()

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