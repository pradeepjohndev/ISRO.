
//Javacript for responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

//Javacript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});


//javasript for testimonials section

var testim = document.getElementById("testim"),
testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
testimleftArrow = document.getElementById("left-arrow"),
testimRightArrow = document.getElementById("right-arrow"),
testimSpeed = 4500,
currentSlide = 0,
currentActive = 0,
testimTimer
;

window.onload = function () {

function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
        testimContent[k].classList.remove("active");
        testimContent[k].classList.remove("inactive");
        testimDots[k].classList.remove("active");
    }
    if (slide < 0) {
        slide = currentSlide = testimContent.length - 1;
    }
    if (slide > testimContent.length - 1) {
        slide = currentSlide = 0;
    }
    if (currentActive != currentSlide) {
        testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
        playSlide(currentSlide += 1);
    }, testimSpeed)
}

testimleftArrow.addEventListener("click", function () {
    playSlide(currentSlide -= 1);
})
testimRightArrow.addEventListener("click", function () {
    playSlide(currentSlide += 1);
})

for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
        playSlide(currentSlide = testimDots.indexOf(this));
    })
}
playSlide(currentSlide);
} 