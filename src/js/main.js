import $ from 'jquery';
import {getNews, getMenu, getSpecials, getGoogleAPI} from './requests';
import {newsTemplate} from './news-template.js';
import {specialsTemplate} from './specials-template.js';
getNews(newsTemplate);
getMenu(specialsTemplate);
