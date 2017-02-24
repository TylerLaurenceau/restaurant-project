import $ from 'jquery';
import {getNews} from './requests.js';

function newsTemplate(data){
  $(".latestNews").append(`<div class = "newsTitle"><b>${data.title}</b></div>
                   <p class = "newsDate"><b>${data.date_published}</b></p>
                   <p class = "newsPost">${data.post}</p>`);
}



export {newsTemplate};
