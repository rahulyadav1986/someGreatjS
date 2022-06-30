var slides = document.querySelector('.slide_items').children;
var nextSlide = document.querySelector(".right_arrow");
var prevSlide = document.querySelector(".left_arrow");
var mainSlide = slides.length;
var index = 0;

nextSlide.onclick = function () {
     next("next");
}
prevSlide.onclick = function () {
     next("prev");
}

function next(direction) {

     if (direction == "next") {
          index++;
          if (index == mainSlide) {
               index = 0;
          }
     }
     else {
          if (index == 0) {
               index = mainSlide - 1;
          }
          else {
               index--;
          }
     }

     for (i = 0; i <mainSlide; i++) {
          slides[i].classList.remove("slide_show");
     }
     slides[index].classList.add("slide_show");

}