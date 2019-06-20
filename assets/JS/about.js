//variables
var expandBio = document.querySelectorAll('.bio');

//bio tile animation
expandBio.forEach(function(bio){
    var timeLine = new TimelineMax();
    var tween = timeLine.add(TweenMax.to(bio,1, {xPercent: 100, autoAlpha: 1, zIndex:5, scale:2.5, ease: Power2.easeOut}));
    var tween2 = timeLine.add(TweenMax.to(bio.querySelectorAll('.bioInfo'), 1, {yPercent: -100, autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    bio.addEventListener("click", toggleAnimation);
    timeLine.reverse();
    function toggleAnimation(){
        if(timeLine.reversed()){
            timeLine.play();
        }
        else{
            timeLine.reverse();
        }
    }
});