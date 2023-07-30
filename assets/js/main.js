import  "bootstrap";
// core version + navigation, pagination modules:
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const $ = require("jquery")

$(function($){
  $("#mode").on("click",(e)=>{
    e.preventDefault();
   let html = $("html");
   let props ={
    "light":"dark",
    "dark":"light"
   }




html.attr("data-bs-theme",props[html.attr("data-bs-theme")])})
// init Swiper:



}($))

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});