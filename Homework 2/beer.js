html = {
    container: document.querySelector(".container"),
    pagination: document.querySelector("#pagination"),
    search: document.querySelector("#search"),
}

pagination.addEventListener('change', function () {
    html.container.innerHTML = ""
    let value = pagination.value
    console.log(pagination.value);
    fetch(`https://api.punkapi.com/v2/beers?page=2&per_page=${value}`)
        .then(res => res.json())
        .then((body) => {
            showBeers(body)
        })
})


function searchBeer(beer) {
    showBeerResult(beer.filter((beer) => beer.name === value1))
}


function showBeerResult() {
    fetch("https://api.punkapi.com/v2/beers/beer_name")
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
    < div class= "beer_menu" >
        <p>${beer.name}</p>
        <img src="${beer.image_url}" alt = "${beer.name}" id = "item3" />
<p>Food:${beer.food_pairing.join(", ")}</p>
    </div >
    `
}