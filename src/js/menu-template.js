import $ from 'jquery';
import {getmenu} from './requests.js';

function menuTemplate(data){
    //console.log(data);
    for (var x = 0; x<data.appetizers.length; x++){
      $(".appetizers").append(`<div class = "foodTitle">${data.appetizers[x].item}:</div>
                               <div class = "foodPrice">$${data.appetizers[x].price}</div>
                               <div class = "foodAllergies1">
                                  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                  <i class="fa fa-heart" aria-hidden="true"></i>
                                  <i class="fa fa-fire" aria-hidden="true"></i>
                                  <i class="fa fa-viadeo" aria-hidden="true"></i>
                               </div>
                               <div class = "foodDescription">${data.appetizers[x].description}</div>
                               `)
    //add a class to foodAllergies1 -- active class   if/if allergy = 1 add active class the current app.
    }
    for (var y = 0; y<data.entrees.length; y++){
      $(".entrees").append(`<div class = "foodTitle">${data.entrees[y].item}:</div>
                            <div class = "foodPrice">$${data.entrees[y].price}</div>
                            <div class = "foodAllergies2">
                                  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                  <i class="fa fa-heart" aria-hidden="true"></i>
                                  <i class="fa fa-fire" aria-hidden="true"></i>
                                  <i class="fa fa-viadeo" aria-hidden="true"></i>
                            </div>
                            <div class = "foodDescription">${data.entrees[y].description}</div>

                            `)
    }
    for (var z = 0; z<data.sides.length; z++){
      $(".sides").append(`<div class = "foodTitle">${data.sides[z].item}</div>
                          <div class = "foodPrice">$${data.sides[z].price}</div>
                          <div class = "foodAllergies3">
                                  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                  <i class="fa fa-heart" aria-hidden="true"></i>
                                  <i class="fa fa-fire" aria-hidden="true"></i>
                                  <i class="fa fa-viadeo" aria-hidden="true"></i>
                          </div>
                          <div class = "foodDescription">${data.sides[z].description}

                          `)
    }
}




export { menuTemplate };
