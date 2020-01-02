const video = document.getElementById('video');

video.addEventListener( "click", () => {
    video.setAttribute('controls','controls');
    if (video.muted === true) {    
        video.muted = false;
 }
})