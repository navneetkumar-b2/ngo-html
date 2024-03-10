burger = document.querySelector(".burger"); //"let burger" was not giving output but it was alerting the correct element
lists = document.getElementById("nav-lists");
rightNav = document.querySelector(".right-nav");
line1 = document.querySelector(".line1");
line2 = document.querySelector(".line2");
line3 = document.querySelector(".line3");
// slider=document.querySelector(".carousel")
let clicked=0;
burger.addEventListener("click", () => {
clicked++;
// alert(clicked)

  rightNav.classList.toggle("hide-on-sm");
  lists.classList.toggle("v-nav");
  

  line1.classList.toggle("trans-l1");
  line2.classList.toggle("trans-l2");
  line3.classList.toggle("trans-l3");
  if(clicked%2==0){
    // lists.classList.toggle("v-nav");

  }
  
});


let slides = document.querySelectorAll(".slides");
// let nxtbtn = document.querySelector(".nxt");
// let prebtn = document.querySelector(".pre");
// alert(nxtbtn)
// alert(prebtn)
slides.forEach((slide, ind) => {
  len = slides.length - ind;
  slide.style.transform = `translateX(${(len - 1) * 100}%)`;
});
let maxSlide = 0;
curslide = slides.length;

updateSlider = () => {
  // alert("f");
  if (curslide == 0) {
    curslide = slides.length - 1;
    slides.forEach((slide) => {
      slide.style.transition = "none";
    });
  } else {
    slides.forEach((slide) => {
      slide.style.transition = "all 1s ease-in-out";
    });
    // curslide--;
  }
  slides.forEach((slide, ind) => {
    slide.style.transform = `translateX(${100 * (curslide - ind)}%)`;
  });
};
// curslide--;
// updateSlider()
// alert(curslide)

nextSlide = () => {
  // alert("i call")
  curslide--;
  updateSlider();
};
preSlide = () => {
  curslide++;
  updateSlider();
};

setInterval(nextSlide, 2000);

