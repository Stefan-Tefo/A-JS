html = {
    imageContainer: document.querySelector(".imageContainer")
}

function ranodomBeer() {
    fetch("https://api.punkapi.com/v2/beers/random")
        .then((res) => res.json())
        .then((beer) => {
            showImage(beer)
            console.log(beer);
            console.log(showImage(beer))
        })
        .catch((error) => console.log("ERROR", error))
}

ranodomBeer()

function showImage(beer) {
    return html.imageContainer.innerHTML = `
    <div class="image">
    <img src="${beer[0].image_url}" alt="${beer[0].name}" />
    <p></p>
    <p></p>
    </div>
    `
}