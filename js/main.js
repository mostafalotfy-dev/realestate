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
  
}($))