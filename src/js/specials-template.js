import $ from 'jquery';
import {getSpecials} from './requests.js'
import {getMenu} from './requests.js'

function specialsTemplate(data){
  $(".todaysSpecial").append(`<p class = "specialsTitle"><p class = "specialDish"><b>${data.entrees[1].item}</b></p>
                              <p>${data.entrees[1].description}<p>
                              <img src="http://cdn-image.foodandwine.com/sites/default/files/201311-xl-scallops-with-fennel-grenobloise.jpg"/>`);
}



export{specialsTemplate};
