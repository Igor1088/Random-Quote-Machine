
document.addEventListener("DOMContentLoaded", function(){
	showQuotes();
	var quoteText;
    var quoteAuthor;
	// generate quotes
	function showQuotes(){
		var quotes = [ { quote: "Nothing will come of nothing; we must dare mighty things.", author: "William Shakespeare"},
		 { quote: "Choose a job you love, and you will never have to work a day in your life ", author: "Confucius"},
		 { quote: "Only one who devotes himself to a cause with his whole strength and soul can be a true master. For this reason mastery demands all of a person.", author: "Albert Einstein"},
		 { quote: "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.", author: "Thomas Edison"},
		 { quote: "What keeps me going is goals.", author: "Muhammad Ali"}
		 ];
		 // get random quote
		var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		document.querySelector(".quote").innerHTML = randomQuote.quote;
		document.querySelector(".author").innerHTML = randomQuote.author;
		quoteText = randomQuote.quote;
    	quoteAuthor = randomQuote.author;
	

	}
	// show quote after button is clicked
	document.querySelector(".button").addEventListener("click", function(){
		showQuotes();
		}, false);

	// tweet quote
	document.querySelector(".tweet").addEventListener("click", function(){
    	var tweetMe = "https://twitter.com/intent/tweet?text="+quoteText+"~"+quoteAuthor+"&url=http://http://codepen.io/IgorBre/full/MaYZyR/";
    	window.open(tweetMe, '_blank');
	   }, false);


}, false);

