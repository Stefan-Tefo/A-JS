html = {
    imageContainer: document.querySelector(".imageContainer"),
    btnOne: document.querySelector("#btnOne"),
    btnGenerate: document.querySelector("#btn_generate"),
  
}

function ranodomBeer() {
    fetch("https://api.punkapi.com/v2/beers/random")
        .then((res) => res.json())
        .then((body) => {
            showImage(body)
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
            <img id="item1" src="${beer[0].image_url || "N/A"}" alt="beer img" />
            <div id="info">
                <p><img src="./icons/procente.png">ABV:${beer[0].abv}%</p>
                <p><img src="./icons/cutlery.png">Food:${beer[0].food_pairing}</p>
                <p><img src="./icons/bitter.png">IBU's:${beer[0].ibu}</p>
                <p><img src="./icons/barley.png">Malts:${beer[0].ingredients.malt.name}</p>
                <p><img src="./icons/hop.png">Hops:${beer[0].ingredients.hops.name}</p>                
            </div>
        </div>
    </div>
    `
}

html.btnOne.addEventListener('click', () => ranodomBeer())