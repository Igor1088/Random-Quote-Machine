
$(document).ready( function(){
	generateQuotes();

 function generateQuotes(){
    var quotes = ["William Shakespeare: Nothing will come of nothing; we must dare mighty things.","Albert Einstein: The person who reads too much and uses his brain too little will fall into lazy habits of thinking.","Confucius: Choose a job you love, and you will never have to work a day in your life ","Tolstoy: The strongest of all warriors are these two Time and Patience."];

    
    var random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteSplit = random.split(":"); 
    $('.author').text(quoteSplit[0]);
    $('.quote').text(quoteSplit[1]);
        
    
}

	$('.button').on("click", function(){
		generateQuotes();
	})
});

