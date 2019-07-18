//variables
var expandYearGrad = document.querySelectorAll(".yearSelect");

//Grad Collapse/Expand for year span
expandYearGrad.forEach(function(grad){
    var timeLine = new TimelineMax();
    var clickT = grad.querySelector(".clickYear");
    var target = grad.querySelectorAll(".grads");
    console.log(clickT);
    if(target){
        TweenLite.set(target, {
        height:0,
        autoAlpha:0
    })};
    timeLine.to(target, 1, {
        height: "auto",
        autoAlpha:1,
        visibility:"visible",
        margin: "2%",
        ease: Cubic.easeInOut
    });
    clickT.addEventListener("click", toggleAnimation);
    timeLine.reverse();
    function toggleAnimation(){
        if(timeLine.reversed()){
            timeLine.play();
            console.log("Click 1");
        }
        else{
            timeLine.reverse();
            console.log("Click 2");
        }
    }
})
    


