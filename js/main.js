import  "bootstrap";

const $ = require("jquery")
import "./slick.min";

!(function($){
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true
  }
  );
  $("#mode").on("click",(e)=>{
    e.preventDefault();
   let html = $("html");
   let props ={
    "light":"dark",
    "dark":"light"
   }
debugger
   html.attr("bs-theme",props[html.attr("data-bs-theme")])
  })
}($))