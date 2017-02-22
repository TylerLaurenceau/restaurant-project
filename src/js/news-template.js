import $ from 'jquery';
import {getNews} from './requests.js';

function newsTemplate(data){
  $(".latestNews").append(`<p class = "newsTitle">${data.title}</p>
                   <p class = "newsDate">${data.date_published}</p>
                   <p class = "newsPost">${data.post}</p>`);
}



export {newsTemplate};
