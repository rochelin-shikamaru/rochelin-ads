// annimation slider
let i = 1;
const annimeSlider = (el)=>{
    const slider = document.querySelector(".slider");
        slider.style.transform = `translateX(${el * -100}%)`;
        
}

setInterval(()=>{
    if( i <= 4){
        annimeSlider(i);
        i++;
    }else{
        i = 0;
        annimeSlider(i);
        i++;
    }
    
   console.log(i);
}, 5000);

// animation à propos
const js_scroll = document.querySelectorAll(".js-scroll");

function elementInView(item, percentageScroll = 100) {
    const distanceElement = item.getBoundingClientRect().top + 100;
    return distanceElement <= window.innerHeight * (percentageScroll / 110);
  }
  
  function displayScrollElement(item) {
    item.classList.add("scrolled");
  }
  
  function handleScrollAnimation() {
    js_scroll.forEach((item) => {
      if (elementInView(item, 100)) {
        displayScrollElement(item);
      }
    });
  }
  
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });