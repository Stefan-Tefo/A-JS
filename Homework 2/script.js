html = {

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
    return `
    <img src="${beer.image_url}" alt="${beer.name}" />
    `
}