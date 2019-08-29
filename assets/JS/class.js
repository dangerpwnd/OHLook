//variables
const panels = document.querySelectorAll(".panel");
const titles = document.querySelectorAll(".panelTitle");
const links = document.querySelectorAll(".panelLink");
var width = $(window).width();

//Initial Tween Set for animated links
TweenLite.set(links, {
    xPercent: 100
})
//Color toggle animation for panel titles
function toggleColor() {
    this.classList.toggle('tColor');
}
//Panel navigation animation for mobile/PC
if (width < 1025) {
    panels.forEach(function (panel) {
            var timeLine = new TimelineMax();
            var tween = timeLine.add(TweenMax.to(panel, 0.5, { filter: "greyscale(0)" }));
            var tween2 = timeLine.add(TweenMax.to(panel.querySelectorAll(".panelLink"), 0.5, { xPercent: 0, autoAlpha: 1, visibility: "visible", ease: Power2.easeOut }))
            console.log("last panel 1024 and below");
            panel.addEventListener("click", toggleAnimation);
            panel.addEventListener("click", toggleColor);
            timeLine.reverse();
            function toggleAnimation() {
                if (timeLine.reversed()) {
                    timeLine.play();
                }
                else {
                    timeLine.reverse();
                }
            }
        }
    )
}
else {
    panels.forEach(function (panel) {
            var timeLine = new TimelineMax();
            var tween = timeLine.add(TweenMax.to(panel, 0.5, { filter: "greyscale(0)" }));
            var tween2 = timeLine.add(TweenMax.to(panel.querySelectorAll(".panelLink"), 0.5, { xPercent: 0, autoAlpha: 1, visibility: "visible", ease: Power2.easeOut }))
            panel.addEventListener("mouseenter", toggleAnimation);
            panel.addEventListener("mouseenter", toggleColor);
            panel.addEventListener("mouseleave", toggleAnimation);
            panel.addEventListener("mouseleave", toggleColor);
            timeLine.reverse();
            function toggleAnimation() {
                if (timeLine.reversed()) {
                    timeLine.play();
                }
                else {
                    timeLine.reverse();
                }
            }
        }
    )
}


