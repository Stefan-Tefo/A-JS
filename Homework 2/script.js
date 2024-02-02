html = {
    imageContainer: document.querySelector(".imageContainer"),
    btnOne: document.querySelector("#btnOne"),
    btnGenerate: document.querySelector("#btn_generate"),
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
    <div class="beer">
        <div id="first_beer_name">
            <h1>Random generate beer</h1>
            <h1>${beer[0].name}</h1>
        </div>
        <div id="info_beer">
            <img id="item1" src="${beer[0].image_url || "N/A"}" alt="${beer[0].name}" />
            <div id="info">
            ${beer[0].abv}%</p>
            ${beer[0].food_pairing}</p>
            <button id="btnOne">Refresh</button>
            </div>
        </div>
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
