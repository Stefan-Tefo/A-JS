html = {
    container: document.querySelector(".container"),
}

function showAllBeer() {
    fetch("https://api.punkapi.com/v2/beers?page=2&per_page=25")
        .then(res => res.json())
        .then((body) => {
            showBeers(body)
        })
}
showAllBeer()

function showBeers(beer) {
    beer.forEach((beer) => {
        html.container.innerHTML += createTable(beer)
    });
}

function createTable(beer) {
    return ` 
    <img src="${beer.image_url || "N/A"}" alt="${beer.name}" />
    ${beer.food_pairing}</p>
    `
}