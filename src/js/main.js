import $ from 'jquery';
import {newsTemplate} from './news-template.js';
import {specialsTemplate} from './specials-template.js';
import {getNews, getMenu, getSpecials, getGoogleAPI, getFlickr} from './requests.js';
import {googleTOKEN} from './token.js';


function displayLocation () {
  var googleMapsHTML = `
     <p class="locationHeader">Our Location</p>
      <p class="map">
        <iframe
          width="320"
          height="150"
          frameborder="0" style="border:0"
          src="https://www.google.com/maps/embed/v1/search?key=${googleTOKEN}&q=The+Iron+Yard,Atlanta+Georgia">
        </iframe>
      </p>
      <p class="locationAddress">404 Downtown St. Atlanta, GA 30303</p>
      <p class="locationContact">404-555-1234 - <a href="#">Directions</a></p>
  `;

  $(".location").append(googleMapsHTML);
};

$(".theMenu").addClass("hidden");
$(".theReservations").addClass("hidden");

//This is what makes the tabs in the content section work.----------------------
function click1(){
    $(".theStory").removeClass("hidden");
    $(".theMenu").addClass("hidden");
    $(".theReservations").addClass("hidden");
  }

$(".storyButton").on("click",click1);

function click2(){
    $(".theStory").addClass("hidden");
    $(".theMenu").removeClass("hidden");
    $(".theReservations").addClass("hidden");
  }

$(".menuButton").on("click",click2);


function click3(){
    $(".theStory").addClass("hidden");
    $(".theMenu").addClass("hidden");
    $(".theReservations").removeClass("hidden");
  }

  $(".reservationsButton").on("click",click3);
//----------------------------------------------------------------------------





displayLocation();
getNews(newsTemplate);
getMenu(specialsTemplate);

getFlickr("food dish");
