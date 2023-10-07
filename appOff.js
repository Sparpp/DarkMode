(function () {
    document.querySelector("html").style.filter = "hue-rotate(180deg) invert(0) ";
    
    let media = document.querySelectorAll("img, picture, video");
    
    media.forEach((mediaItem)=>{
        mediaItem.style.filter = "hue-rotate(180deg) invert(0)";
    })
})();