var quoteAuthor;
var quoteContent;
$(document).ready(function() {
  getQuote();
  $("#reload").on("click", getQuote);
  $("#twittQuote").on("click", tweetQuote)
});
function getQuote(){    
$.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',             
    	headers: {
      "X-Mashape-Key": "8Bnw5bpc9hmshFITU7wiVKGuPBIvp1mOeDijsnfMQwKhp2V2rN",
  
			},
			method: 'POST',
			dataType: 'json',                 
      success: function (data) { 
        quoteContent = data.quote;
        quoteAuthor = data.author;
        var quoteHtml = "<blockquote>" + data.quote + "<footer>" + data.author + "</footer>" + "</blockquote>";
        $("#quote").html(quoteHtml);
        }
    });
}
function tweetQuote() {
  $('#twittQuote').on('click', function() {
  window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + window.quoteContent + '" ' + window.quoteAuthor),'_blank');
  })
};