import $ from 'jquery';
import {getSpecials} from './requests.js'
import {getMenu} from './requests.js'

function specialsTemplate(data){
  console.log(data);
  $(".todaysSpecial").append(`<p>${data.entrees[1].item}</p>
                              <p>${data.entrees[1].description}<p>`);
}



export{specialsTemplate};
