import $ from 'jquery';
import {getmenu} from './requests.js';

function menuTemplate(data){
    console.log(data);
    for (var x = 0; x<data.appetizers.length; x++){
      $(".appetizers").append(`<div class = "foodTitle">${data.appetizers[x].item}:</div>
                               <span class = "foodPrice">${data.appetizers[x].price}</span>
                               <div class = "foodDescription">${data.appetizers[x].description}</div>`)
    }
    for (var y = 0; y<data.entrees.length; y++){
      $(".entrees").append(`<div class = "foodTitle">${data.entrees[y].item}:</div>
                            <span class = "foodPrice">${data.appetizers[x].price}</span>
                            <div class = "foodDescription">${data.entrees[y].description}</div>`)
    }
    for (var z = 0; z<data.sides.length; z++){
      $(".sides").append(`<div class = "foodTitle">${data.sides[z].item}</div>
                          <span class = "foodPrice">${data.appetizers[x].price}</span>
                          <div class = "foodDescription">${data.sides[z].description}`)
    }
  }

export { menuTemplate };
