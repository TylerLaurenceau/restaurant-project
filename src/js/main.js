import $ from 'jquery';
import {newsTemplate} from './news-template.js';
import {menuTemplate, foodAllergyIcons} from './menu-template.js';
import {specialsTemplate} from './specials-template.js';
import {getNews,getMenu,getSpecials,getGoogleAPI,getFlickr, processFlickr} from './requests.js';
import {displayLocation} from './location.js';


//This is what makes the tabs in the content section work.----------------------
$(".theMenu").addClass("hidden");
$(".theReservations").addClass("hidden");

function click1() {
    $(".theStory").removeClass("hidden");
    $(".theMenu").addClass("hidden");
    $(".theReservations").addClass("hidden");
}

$(".storyButton").on("click", click1);

function click2() {
    $(".theStory").addClass("hidden");
    $(".theMenu").removeClass("hidden");
    $(".theReservations").addClass("hidden");
}

$(".menuButton").on("click", click2);


function click3() {
    $(".theStory").addClass("hidden");
    $(".theMenu").addClass("hidden");
    $(".theReservations").removeClass("hidden");
}

$(".reservationsButton").on("click", click3);
//----------------------------------------------------------------------------

getNews(newsTemplate);
getMenu(specialsTemplate);
getFlickr("food dish", processFlickr);
getMenu(menuTemplate);
getMenu(foodAllergyIcons);
displayLocation();
