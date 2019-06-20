//variables
var expandBio = document.querySelectorAll('.bio');

//bio tile animation
expandBio.forEach(function(bio){
    var timeLine = new TimelineMax();
    var tween = timeLine.add(TweenMax.to(bio,1, {autoAlpha: 1, zIndex:10, scale:1.8, ease: Power2.easeOut}));
    var tween2 = timeLine.add(TweenMax.to(bio.querySelectorAll('.transBack'), 0.3, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    var tween3 = timeLine.add(TweenMax.to(bio.querySelectorAll('.bioInfo'), 1, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
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