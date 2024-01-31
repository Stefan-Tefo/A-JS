html = {
    imageContainer: document.querySelector(".imageContainer"),
    btnOne: document.querySelector("#btnOne")
}

function ranodomBeer() {
    fetch("https://api.punkapi.com/v2/beers/1")
        .then((res) => res.json())
        .then((beer) => {
            console.log(beer);
            showImage(beer)
        })
        .catch((error) => console.log("ERROR", error))
}

ranodomBeer()

function showImage(beer) {
    return html.imageContainer.innerHTML = `
    <div class="image">
    <h3>Random generate beer</h3>
    <img src="${beer[0].image_url || "N/A"}" alt="${beer[0].name}" />
    <p><img src="./icons/beer.png" alt="beer_icon">
    ${beer[0].abv}%</p>
    <p><img src="./icons/menu.png" alt="recommendat_food">
    ${beer[0].food_pairing}</p>
    </div>
    `
}

html.btnOne.addEventListener('click', () => GenerateRandomBear())

function GenerateRandomBear() {
    fetch("https://api.punkapi.com/v2/beers/random")
        .then((res) => res.json())
        .then((beer) => {
            showImage(beer)
        })
}
