import  "bootstrap";

const $ = require("jquery")
import "./slick.min";

!(function($){
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  );
  $("#mode").on("click",(e)=>{
    e.preventDefault();
   let html = $("html");
   let props ={
    "light":"dark",
    "dark":"light"
   }

   
   html.attr("data-bs-theme",props[html.attr("data-bs-theme")])
  })
}($))