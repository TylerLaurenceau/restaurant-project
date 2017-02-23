import $ from 'jquery';
import { flickrTOKEN } from './token';

//news/blog ajax request
function getNews (callback) {
  return $.ajax ({
  url: "https://json-data.herokuapp.com/restaurant/news/1",
  success: callback
 })
}

//fancy menu request
function getMenu (callback){
	return $.ajax({
		url:"https://json-data.herokuapp.com/restaurant/menu/1",
    success: callback
	})
}

//daily specials request
function getSpecials (data){
	 return  $.ajax({
		url:"https://json-data.herokuapp.com/restaurant/special/1",
		success: console.log
	})
}

//flickr API request

function getFlickr (search) {
  var BASE_URL = "https://api.flickr.com/services/rest";

  var data = $.ajax ({
    url: BASE_URL,
   data: {
       api_key: flickrTOKEN,
       method: "flickr.photos.getRecent",
       per_page: 6
     },
 success: console.log
  })
}






export { getNews, getMenu, getSpecials, getFlickr };
