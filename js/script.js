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