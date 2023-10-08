(function () {
    document.querySelector("html").style.filter = "hue-rotate(180deg) invert(0) saturate(75%)";
    
    let media = document.querySelectorAll("img, picture, video");
    
    media.forEach((mediaItem)=>{
        mediaItem.style.filter = "hue-rotate(180deg) invert(0) saturate(75%)";
    })
})();