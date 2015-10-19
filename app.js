
document.addEventListener("DOMContentLoaded", function(){
	showQuotes();
	// generate quotes
	function showQuotes(){
		var quotes = [ { quote: "Nothing will come of nothing; we must dare mighty things.", author: "William Shakespeare"},
		 { quote: "Choose a job you love, and you will never have to work a day in your life ", author: "Confucius"},
		 { quote: "Only one who devotes himself to a cause with his whole strength and soul can be a true master. For this reason mastery demands all of a person.", author: "Albert Einstein"}
		 ];
		 // get random quote
		var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		document.querySelector(".quote").innerHTML = randomQuote.quote;
		document.querySelector(".author").innerHTML = randomQuote.author;
	

	}
	// show quote after button is clicked
	document.querySelector(".button").addEventListener("click", function(){
			showQuotes();
		}, false);


}, false);

