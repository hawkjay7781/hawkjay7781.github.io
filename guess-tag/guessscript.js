
let field = document.getElementById('search-field');
let search = document.getElementById('search');


//let tags = ['car', 'home', 'dog', 'cat'];
let list = document.getElementById("list-data");
//let answerList = document.getElementById('choices');
//let answer = "";

field.onsubmit = function (event) {
	event.preventDefault();
let searchWord = search.value;


getTaggedPictures(searchWord);

}


/*
function randomColor() {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

function reset() {
	answerList.innerHTML = "";
	answer = tags(Math.floor(Math.random() * tags.length));
	getTaggedPhotos(answer);

	let choices = [];
	choices.push(answer);

	while(choices.length < 4) {
		let rand = tags(Math.floor(Math.random() * tags.length));
		if(choices.indexOf(rand) == -1) {
			choices.push(rand);
		}
	}

	choices.sort(function() {
		return Math.random() * 2 - 1;
	});

	for (let i = 0; 1 < choices.length; i++) {
		let li = document.createElement('li');
		let btn = document.createElement('button');
		li.appendChild(btn)
		btn.innerHTML = choices[i]
		btn.style.backgroundColor = randomColor();
		btn.onclick = function() {
			if (btn.innerHTML == answer) {
				window.alert('You are Right')
			} 
			else { 
				window.alert('Sorry! the answer is ' + answer)
			}

			reset();
		}
		answerList.appendChild(li);
	}
}

*/

function getTaggedPictures (tagName) {

	fetch('https://api.tumblr.com/v2/tagged?tag=' + tagName + '&api_key=iXn4AwIhZmz0YFzggBc7d1kRwHDI7EIJD3RYb7aZl8lEYTlHs9')
	  .then (function(response) {
	  		return response.json ();
	  })
	  .then (function(result) {

	  	list.innerHTML = '';

	  	let items = result.response;

	  	for (let i = 0; i < items.length; i++) {
	  		let item = items[i];

	  		if (item.photos != undefined) {
	  			let altSizes = item.photos[0].alt_sizes
	  			let imgSrc = altSizes[altSizes.length - 3].url;

		  		let img = document.createElement('img');
		  		img.src = imgSrc;

		  		let li = document.createElement('li');
		  		li.appendChild(img);

		  		list.appendChild(li);



	  		}
	  	}
	  })

}

//reset ()
