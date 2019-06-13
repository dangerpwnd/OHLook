var panels = document.querySelectorAll('.aboutInfo');


panels.forEach(function(panel){
    var timeLine = new TimelineMax();
	var tween = timeLine.add(TweenMax.to(panel,0.5, {flex:3}));
	var tween2 = timeLine.add(TweenMax.to(panel.querySelector("h1"), 0.5, {autoAlpha:0, ease: Power2.easeOut}));
	var tween3 = timeLine.add(TweenMax.to(panel.querySelector("h1"), 0.5, {writingMode:"horizontal-tb", textOrientation:"sideways",autoAlpha:1, ease: Power2.easeOut}));
	var tween4 = timeLine.add(TweenMax.to(panel.querySelectorAll("h2"), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
	var tween5 = timeLine.add(TweenMax.to(panel.querySelectorAll("p"), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));
	var tween5 = timeLine.add(TweenMax.to(panel.querySelectorAll("ul"), 0.5, {autoAlpha:1, visibility:'visible', ease: Power2.easeOut}));

    panel.addEventListener("click", toggleAnimation);
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