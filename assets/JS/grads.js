//variables
var expandLeftGrad = document.querySelectorAll(".leftTile");
var expandRightGrad = document.querySelectorAll(".rightTile");
var expandYearGrad = document.querySelectorAll(".yearSelect");

//Left tile animation
expandLeftGrad.forEach(function(grad){
    var timeLine = new TimelineMax();
    var tween = timeLine.add(TweenMax.to(grad,1, {xPercent: 100, autoAlpha: 1, zIndex:5, scale:2.5, ease: Power2.easeOut}));
    var tween2 = timeLine.add(TweenMax.to(grad.querySelectorAll('.gradInfo'), 1, {yPercent: -100, autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    grad.addEventListener("click", toggleAnimation);
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

//Right tile animation
expandRightGrad.forEach(function(grad){
    var timeLine = new TimelineMax();
    var tween = timeLine.add(TweenMax.to(grad,1, {xPercent: -100, autoAlpha: 1, zIndex:5, scale:2.8, ease: Power2.easeOut}));
    var tween2 = timeLine.add(TweenMax.to(grad.querySelectorAll('.gradInfo'), 1, {yPercent: -100, autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    grad.addEventListener("click", toggleAnimation);
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

//Grad Collapse/Expand for year span
expandYearGrad.forEach(function(grad){
    var timeLine = new TimelineMax();
    var target = grad.getElementsByTagName("li");
    TweenLite.set(target, {
        height:0,
        autoAlpha:0
    });
    timeLine.to(target, 1, {
        height: "auto",
        autoAlpha:1,
        visibility:"visible",
        ease: Cubic.easeInOut
    });
    grad.addEventListener("click", toggleAnimation);
    timeLine.reverse();
    function toggleAnimation(){
        if(timeLine.reversed()){
            timeLine.play();
        }
        else{
            timeLine.reverse();
        }
    }
})
    


