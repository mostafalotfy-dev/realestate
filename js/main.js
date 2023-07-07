import  "bootstrap";
// core version + navigation, pagination modules:
import Glide from '@glidejs/glide'

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


new Glide('.glide').mount()
}($))
