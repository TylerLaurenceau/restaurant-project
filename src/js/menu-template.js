import $ from 'jquery';
import {getmenu} from './requests.js';


function menuTemplate(data){
  console.log(data)

//-this is highlighting the correct appetizer allergy icon--------------------------------
    for (var x = 0; x<data.appetizers.length; x++){

        if (data.appetizers[x].allergies === 1) {
          var allergiesIcons = `<i class="fa fa-exclamation-triangle blue" title="This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance." aria-hidden="true"></i>`
        } else {
              allergiesIcons = `<i class="fa fa-exclamation-triangle greyed" aria-hidden="true"></i>`
        };

        if (data.appetizers[x].favorite === 1) {
          var favoriteIcons = `<i class="fa fa-heart yellow" title="We have been doing this a long time and this item has become one of our favorites." aria-hidden="true"></i>`
        } else {
              favoriteIcons = `<i class="fa fa-heart greyed" aria-hidden="true"></i>`
        };

        if (data.appetizers[x].spicy === 1) {
          var spicyIcons = `<i class="fa fa-fire red" title="This item is spicy, please handle with care and drink lots of water." aria-hidden="true"></i>`
        } else {
              spicyIcons = `<i class="fa fa-fire greyed" aria-hidden="true"></i>`
        };

        if (data.appetizers[x].vegan === 1) {
          var veganIcons = `<i class="fa fa-viadeo green" title="This item contains no meat and has been prepared without the use of animal products." aria-hidden="true"></i>`
        } else {
              veganIcons = `<i class="fa fa-viadeo greyed" aria-hidden="true"></i>`
        };
//---end of appetizer allergy icons section-------------------------------------
      $(".appetizers").append(`<div class = "foodTitle">${data.appetizers[x].item}:</div>
                               <div class = "foodPrice">$${data.appetizers[x].price}</div>
                               <div class = "allergy">${allergiesIcons}${favoriteIcons}${spicyIcons}${veganIcons}</div>
                               <div class = "foodDescription">${data.appetizers[x].description}</div>
                               `)
    }

    for (var y = 0; y<data.entrees.length; y++){

//--this is highlight the correct entrees allergy icon----------------------------------
        if (data.entrees[y].allergies === 1) {
          var allergiesIcons = `<i class="fa fa-exclamation-triangle blue" aria-hidden="true"></i>`
        } else {
              allergiesIcons = `<i class="fa fa-exclamation-triangle greyed" aria-hidden="true"></i>`
        };

        if (data.entrees[y].favorite === 1) {
          var favoriteIcons = `<i class="fa fa-heart yellow" aria-hidden="true"></i>`
        } else {
              favoriteIcons = `<i class="fa fa-heart greyed" aria-hidden="true"></i>`
        };

        if (data.entrees[y].spicy === 1) {
          var spicyIcons = `<i class="fa fa-fire red" aria-hidden="true"></i>`
        } else {
              spicyIcons = `<i class="fa fa-fire greyed" aria-hidden="true"></i>`
        };

        if (data.entrees[y].vegan === 1) {
          var veganIcons = `<i class="fa fa-viadeo green" aria-hidden="true"></i>`
        } else {
              veganIcons = `<i class="fa fa-viadeo greyed" aria-hidden="true"></i>`
        };
//------end of entrees allery icon section--------------------------------------

      $(".entrees").append(`<div class = "foodTitle">${data.entrees[y].item}:</div>
                            <div class = "foodPrice">$${data.entrees[y].price}</div>
                            <div class = "allergy">${allergiesIcons}${favoriteIcons}${spicyIcons}${veganIcons}</div>
                            <div class = "foodDescription">${data.entrees[y].description}</div>
                            `)
    }

    for (var z = 0; z<data.sides.length; z++){

//----this is highlighting the correct sides allergy icon-----------------------------
        if (data.sides[z].allergies === 1) {
          var allergiesIcons = `<i class="fa fa-exclamation-triangle blue" aria-hidden="true"></i>`
        } else {
              allergiesIcons = `<i class="fa fa-exclamation-triangle greyed" aria-hidden="true"></i>`
        };

        if (data.sides[z].favorite === 1) {
          var favoriteIcons = `<i class="fa fa-heart yellow" aria-hidden="true"></i>`
        } else {
              favoriteIcons = `<i class="fa fa-heart greyed" aria-hidden="true"></i>`
        };

        if (data.sides[z].spicy === 1) {
          var spicyIcons = `<i class="fa fa-fire red" aria-hidden="true"></i>`
        } else {
              spicyIcons = `<i class="fa fa-fire greyed" aria-hidden="true"></i>`
        };

        if (data.sides[z].vegan === 1) {
          var veganIcons = `<i class="fa fa-viadeo green" aria-hidden="true"></i>`
        } else {
              veganIcons = `<i class="fa fa-viadeo greyed" aria-hidden="true"></i>`
        };
//------------------------------------------------------------------------------
      $(".sides").append(`<div class = "foodTitle">${data.sides[z].item}</div>
                          <div class = "foodPrice">$${data.sides[z].price}</div>
                          <div class = "allergy">${allergiesIcons}${favoriteIcons}${spicyIcons}${veganIcons}</div>
                          <div class = "foodDescription">${data.sides[z].description}
                          `)
    }
}




export { menuTemplate };
