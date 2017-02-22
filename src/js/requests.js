import $ from 'jquery';

//news/blog ajax request
function getNews () {
  return $.ajax ({
  url: "https://json-data.herokuapp.com/restaurant/news/1",
  success: console.log
 })
}

//fancy menu request
function getMenu (){
	return $.ajax({
		url:"https://json-data.herokuapp.com/restaurant/menu/1",
    success: console.log
	})
}

//daily specials request
function getSpecials (){
	 return  $.ajax({
		url:"https://json-data.herokuapp.com/restaurant/special/1",
		success: console.log
	})
}



export { getNews, getMenu, getSpecials }
