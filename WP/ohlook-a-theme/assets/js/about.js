//variables
var expandBio = document.querySelectorAll('.bio');
var width = jQuery(window).width();

//bio tile animation

if(width < 1025){
expandBio.forEach(function(bio){
    var timeLine = new TimelineMax();
    //Headshot scales
    var tween = timeLine.add(TweenMax.to(bio,1, {autoAlpha: 1, zIndex:10, scale:1.8, ease: Power2.easeOut}));
    //Background appears
    var tween2 = timeLine.add(TweenMax.to(bio.querySelectorAll('.transBack'), 0.3, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    //Info appears
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
});}
else{
    expandBio.forEach(function(bio){
    var timeLine = new TimelineMax();
    //Headshot scales
    var tween = timeLine.add(TweenMax.to(bio,1, {autoAlpha: 1, zIndex:10, scale:1.8, ease: Power2.easeOut}));
    //Background appears
    var tween2 = timeLine.add(TweenMax.to(bio.querySelectorAll('.transBack'), 0.3, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    //Info appears
    var tween3 = timeLine.add(TweenMax.to(bio.querySelectorAll('.bioInfo'), 1, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    bio.addEventListener("mouseenter", toggleAnimation);
    bio.addEventListener("mouseleave", toggleAnimation);
    timeLine.reverse();
    function toggleAnimation(){
        if(timeLine.reversed()){
            timeLine.play();
        }
        else{
            timeLine.reverse();
        }
    }
})}