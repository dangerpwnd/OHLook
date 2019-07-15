
const panels = document.querySelectorAll(".panel");
const titles = document.querySelectorAll(".panelTitle");
const links = document.querySelectorAll(".panelLink");

TweenLite.set(titles, {
	yPercent: 50
});

TweenLite.set(links, {
	xPercent: 100
})

panels.forEach(function(panel){

	var timeLine = new TimelineMax();
	var tween = timeLine.add(TweenMax.to(panel, 0.25, {filter: "greyscale(0)"}));
	var tween2 = timeLine.add(TweenMax.to(panel.querySelectorAll(".panelTitle"),0.25, {yPercent: 0, ease: Power2.easeOut}));
	var tween3 = timeLine.add(TweenMax.to(panel.querySelectorAll(".panelLink"), 0.25, {xPercent: 0, autoAlpha:1, visibility: "visible", ease: Power2.easeOut}))
	panel.addEventListener("mouseenter", toggleAnimation);
	panel.addEventListener("mouseleave", toggleAnimation);
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
