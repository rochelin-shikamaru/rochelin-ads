const video = document.querySelector("video");




const onclickVideo = ()=> {
    console.log(video);
    video.autoplay = true;
    video.loop = true;
    
}





window.addEventListener("load", onclickVideo);