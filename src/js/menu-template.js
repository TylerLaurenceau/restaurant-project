import $ from 'jquery';
import {getmenu} from './requests.js';

function menuTemplate(data){
    console.log(data);
    for (var x = 0; x<data.appetizers.length; x++){
      $(".appetizers").append(`<div class = "foodTitle">${data.appetizers[x].item}</div>
                               <div class = "foodDescription">${data.appetizers[x].description}`)
    }
    for (var y = 0; y<data.entrees.length; y++){
      $(".entrees").append(`<div class = "foodTitle">${data.appetizers[y].item}</div>
                            <div class = "foodDescription">${data.entrees[y].description}`)
    }
    for (var z = 0; z<data.sides.length; z++){
      $(".sides").append(`<div class = "foodTitle">${data.sides[z].item}</div>
                          <div class = "foodDescription">${data.sides[z].description}`)
    }
  }

export { menuTemplate };
