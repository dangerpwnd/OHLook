var expandLeftGrad = document.querySelectorAll(".leftTile");
var expandRightGrad = document.querySelectorAll(".rightTile");

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

    


