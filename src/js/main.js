import $ from 'jquery';
import {getNews, getMenu, getSpecials, getGoogleAPI} from './requests.js';
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

displayLocation();
