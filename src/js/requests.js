import $ from 'jquery';
import {flickrTOKEN} from './token';

//news/blog ajax request
function getNews(callback) {
    return $.ajax({
        url: "https://json-data.herokuapp.com/restaurant/news/1",
        success: callback
    })
}

//fancy menu request
function getMenu(callback) {
    return $.ajax({
        url: "https://json-data.herokuapp.com/restaurant/menu/1",
        success: callback
    })
}

//daily specials request
function getSpecials (data) {
	 return  $.ajax({
		url:"https://json-data.herokuapp.com/restaurant/special/1",
		success: console.log
	})
}

//flickr API request
function getFlickr (search, callback) {
  var BASE_URL = "https://api.flickr.com/services/rest";

  var data = $.ajax ({
    url: BASE_URL,
   data: {
       api_key: flickrTOKEN,
       method: "flickr.photos.search",
       text: search,
       format: "json",
       nojsoncallback: 1,
       per_page: 8,
       sort: 'interestingness-asc'
     },
 success: processFlickr
 })
}
//taking the object from 'getFlickr' and running it through a template literal to populate the page
  function processFlickr (data) {
    console.log(data);
      var eachPhoto = data.photos.photo;
      eachPhoto.forEach(function(photo){
          if (photo.id != '32260398823')  {
            $(".sidebarContainer").append(`
                  <img src="https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg">`);

      };
  });
}



export {
    getNews,
    getMenu,
    getSpecials,
    getFlickr,
};
