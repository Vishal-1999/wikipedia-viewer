$(document).ready(function(){
  $("#searchbox button").on('click', searchForArticle);
});

function searchForArticle(en){
  en.preventDefault();
  var searchTerm = $("#searchbox input[type=text]").val().replace(/ /g, '%20');
  
  var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&meta=&srsearch=" + searchTerm + "&srwhat=text&srprop=snippet%7Csectiontitle%7Ccategorysnippet&callback=?";


  
  $.getJSON(url, callBackSuccess);
}

function callBackSuccess(data){
  
  var resultsArray = data.query.search;
  var html = '';
   var page = 'https://en.wikipedia.org/?curid=';
  
  resultsArray.forEach(function(i){
    html += "<div class='results'><a href='" + page + i.pageid +"' target='_blank'>" + i.title + "</a> <p>" + i.snippet + "</p></div>";
  });
  
 
  $('#box').html(html);
}