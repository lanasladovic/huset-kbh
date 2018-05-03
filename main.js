function fetchThemMovies(){
    fetch("http://the-ock.com/wp/wp-json/wp/v2/movie")
    .then(e => e.json())
    .then(showMovies)
}

function showMovies(data){
    console.log(data)
    data.forEach(showSingleMovie)
    }


function showSingleMovie(aMovie){
    console.log(aMovie)
    let template = document.querySelector("#movtemp").content;
    let clone = template.cloneNode(true);


    clone.querySelector("h1").textContent = aMovie.title.rendered;

    clone.querySelector(".descript").innerHTML = aMovie.content.rendered;



    let movlist = document.querySelector("#movlist");
    movlist.appendChild(clone);

}




fetchThemMovies();

function fetchThatFood(){
    fetch("http://the-ock.com/wp/wp-json/wp/v2/food/")
    .then(e => e.json())
    .then(showFoods)
}

function showFoods(data){
    console.log(data)
    data.forEach(showSingleFood)
    }


function showSingleFood(aFood){
    console.log(aFood)
    let template = document.querySelector("#foodtemp").content;
    let clone = template.cloneNode(true);


    clone.querySelector("h1").textContent = aFood.title.rendered;

    clone.querySelector(".descript2").innerHTML = aFood.content.rendered;



    let foodlist = document.querySelector("#foodlist");
    foodlist.appendChild(clone);

}

fetchThatFood();
