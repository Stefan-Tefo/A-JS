html = {
    container: document.querySelector(".container"),
    pagination: document.querySelector("#pagination"),
    search: document.querySelector("#search"),
}

let value = html.pagination.value
if (parseInt(value) === 25) {
    showAllBeer()
}
// else if (parseInt(value) === 50) {
//     fetch("https://api.punkapi.com/v2/beers?page=2&per_page=50")
//     .then(res => res.json())
//     .then((body) => {
//         showBeers(body)
//     })
// }else{
//     fetch("https://api.punkapi.com/v2/beers?page=2&per_page=100")
//         .then(res => res.json())
//         .then((body) => {
//             showBeers(body)
//         }) 
// }

function searchBeer(beer) {
    let value1 = html.search.value
    showBeerResult(beer.filter((beer) => beer.name === value1))
}


function showBeerResult() {
    fetch("https://api.punkapi.com/v2/beers/beer_name")
        .then(res => res.json())
        .then((body) => {
            showBeers(body)
        })
}

function showAllBeer() {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=25")
        .then(res => res.json())
        .then((body) => {
            showBeers(body)
        })
}


function showBeers(beer) {
    beer.forEach((beer) => {
        html.container.innerHTML += createTable(beer)
    });
}

function createTable(beer) {
    return ` 
    <div class="beer_menu">
        <p>${beer.name}</p>
        <img src="${beer.image_url || "N/A"}" alt="${beer.name}" id="item3"/>
        <p>Food:${beer.food_pairing}</p>
    </div>
    `
}