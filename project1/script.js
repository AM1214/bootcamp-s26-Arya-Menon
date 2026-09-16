const options = { 
  method: 'GET',
  headers: {
    "Accept" : "application/json" // request the response in JSON format
  }
}
document.addEventListener('click', event => {
	if (event.target.id === 'button') {
		fetch('https://icanhazdadjoke.com/', options)
	.then(response => {
		return response.json()
	})
	.then(responseAsJson => {
		console.log(responseAsJson)
        var jokeList = document.getElementsByClassName("joke");
        var joke = jokeList[0];
        joke.innerText = responseAsJson.joke;
	})
	.catch(error => {
		console.error(error)
	})
	}
})
