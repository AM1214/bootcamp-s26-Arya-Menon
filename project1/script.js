const options = { 
  method: 'GET',
  headers: {
    "Accept" : "application/json" // request the response in JSON format
  }
}
document.addEventListener('click', event => {
	if (event.target.classList.contains('button')) {
        var term = event.target.id;
        var url = 'https://icanhazdadjoke.com/search?term='+term;
        console.log(url);
		fetch(url, options)
	.then(response => {
		return response.json()
	})
	.then(responseAsJson => {
		console.log(responseAsJson)
        var jokeList = document.getElementsByClassName("joke");
        var joke = jokeList[0];
        var jokeArray = responseAsJson.results;
        var randJoke = jokeArray[Math.floor(Math.random() * jokeArray.length)];
        joke.innerText = randJoke.joke;
	})
	.catch(error => {
		console.error(error)
	})
	}
})
