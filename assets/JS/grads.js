//variables
var expandLeftGrad = document.querySelectorAll(".leftTile");
var expandRightGrad = document.querySelectorAll(".rightTile");
var expandYearGrad = document.querySelectorAll(".yearSelect");
var height = $(window).height();
var width = $(window).width();


//Left tile animation
expandLeftGrad.forEach(function(grad){
    if(width > 1024){
    var timeLine = new TimelineMax();
    
    var tween = timeLine.add(TweenMax.to(grad,1, {xPercent: 100, autoAlpha: 1, zIndex:5, scale:2, ease: Power2.easeOut}));
    var tween2 = timeLine.add(TweenMax.to(grad.querySelector('.transBack'), 0.5,{autoAlpha:1, visibility:'visible', ease: Power2.easeOut} ));
    var tween3 = timeLine.add(TweenMax.to(grad.querySelectorAll('.gradInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    var tween4 = timeLine.add(TweenMax.to(grad.querySelectorAll('.subInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
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
}
else if(width < 450){
    var timeLine = new TimelineMax();
    var tween = timeLine.add(TweenMax.to(grad,1, {autoAlpha: 1, zIndex:5, ease: Power2.easeOut}));
    var tween2 = timeLine.add(TweenMax.to(grad.querySelector('.transBack'), 0.5,{autoAlpha:1, visibility:'visible', ease: Power2.easeOut} ));
    var tween3 = timeLine.add(TweenMax.to(grad.querySelectorAll('.gradInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    var tween4 = timeLine.add(TweenMax.to(grad.querySelectorAll('.subInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
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
}
else{
    var timeLine = new TimelineMax();
    var tween = timeLine.add(TweenMax.to(grad,1, {autoAlpha: 1, zIndex:5, scale:1.5, ease: Power2.easeOut}));
    var tween2 = timeLine.add(TweenMax.to(grad.querySelector('.transBack'), 0.5,{autoAlpha:1, visibility:'visible', ease: Power2.easeOut} ));
    var tween3 = timeLine.add(TweenMax.to(grad.querySelectorAll('.gradInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    var tween4 = timeLine.add(TweenMax.to(grad.querySelectorAll('.subInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
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
}
});

//Right tile animation
expandRightGrad.forEach(function(grad){
    if(width > 1024){
    var timeLine = new TimelineMax();
    var tween = timeLine.add(TweenMax.to(grad,1, {xPercent: -100, autoAlpha: 1, zIndex:5, scale:2, ease: Power2.easeOut}));
    var tween2 = timeLine.add(TweenMax.to(grad.querySelector('.transBack'), 0.5,{autoAlpha:1, visibility:'visible', ease: Power2.easeOut} ));
    var tween3 = timeLine.add(TweenMax.to(grad.querySelectorAll('.gradInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    var tween4 = timeLine.add(TweenMax.to(grad.querySelectorAll('.subInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
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
}
else if(width < 450){
    var timeLine = new TimelineMax();
    var tween = timeLine.add(TweenMax.to(grad,1, {autoAlpha: 1, zIndex:5, ease: Power2.easeOut}));
    var tween2 = timeLine.add(TweenMax.to(grad.querySelector('.transBack'), 0.5,{autoAlpha:1, visibility:'visible', ease: Power2.easeOut} ));
    var tween3 = timeLine.add(TweenMax.to(grad.querySelectorAll('.gradInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    var tween4 = timeLine.add(TweenMax.to(grad.querySelectorAll('.subInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
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
}
else{
    var timeLine = new TimelineMax();
    var tween = timeLine.add(TweenMax.to(grad,1, {autoAlpha: 1, zIndex:5, scale:1.5, ease: Power2.easeOut}));
    var tween2 = timeLine.add(TweenMax.to(grad.querySelector('.transBack'), 0.5,{autoAlpha:1, visibility:'visible', ease: Power2.easeOut} ));
    var tween3 = timeLine.add(TweenMax.to(grad.querySelectorAll('.gradInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
    var tween4 = timeLine.add(TweenMax.to(grad.querySelectorAll('.subInfo'), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
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
    


