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

// variables pour hamburger menu
const btnMenu = document.getElementsByClassName("btn-menu");
const body = document.body;

//   activated nav
const navElement = document.querySelectorAll("nav a");
navElement.forEach(el =>{
    el.addEventListener('click', (e) =>{
        document.querySelector(".selected").classList.remove("selected");
        e.target.classList.add("selected");
        sliderNav.style.top = "-100%";
        body.classList.toggle('menu-open');
    })
})

// active hamburger menu

const sliderNav = document.querySelector("header nav");
for (let i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click', function () {
        body.classList.toggle('menu-open');

        if(body.classList.contains('menu-open')){
            sliderNav.style.top = "0";
        }
        else{
            sliderNav.style.top = "-100%";
        }
    });
}