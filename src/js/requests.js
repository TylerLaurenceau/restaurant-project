import $ from 'jquery';

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




export { getNews, getMenu, getSpecials };
