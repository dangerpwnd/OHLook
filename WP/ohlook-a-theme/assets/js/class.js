//variables
const cpanels = document.querySelectorAll(".cpanel");
const titles = document.querySelectorAll(".cpanelTitle");
const clinks = document.querySelectorAll(".cpanelLink");
var width = jQuery(window).width();

//Initial Tween Set for animated links
TweenLite.set(clinks, {
    xPercent: 100
})
//Color toggle animation for panel titles
function toggleColor() {
    this.classList.toggle('tColor');
}
//Panel navigation animation for mobile/PC
if (width < 1025) {
    cpanels.forEach(function (cpanel) {
            var timeLine = new TimelineMax();
            var tween = timeLine.add(TweenMax.to(cpanel, 0.5, { filter: "greyscale(0)" }));
            var tween2 = timeLine.add(TweenMax.to(cpanel.querySelectorAll(".panelLink"), 0.5, { xPercent: 0, autoAlpha: 1, visibility: "visible", ease: Power2.easeOut }))
            console.log("last panel 1024 and below");
            cpanel.addEventListener("click", toggleAnimation);
            cpanel.addEventListener("click", toggleColor);
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
    cpanels.forEach(function (cpanel) {
            var timeLine = new TimelineMax();
            var tween = timeLine.add(TweenMax.to(cpanel, 0.5, { filter: "greyscale(0)" }));
            var tween2 = timeLine.add(TweenMax.to(cpanel.querySelectorAll(".panelLink"), 0.5, { xPercent: 0, autoAlpha: 1, visibility: "visible", ease: Power2.easeOut }))
            cpanel.addEventListener("mouseenter", toggleAnimation);
            cpanel.addEventListener("mouseenter", toggleColor);
            cpanel.addEventListener("mouseleave", toggleAnimation);
            cpanel.addEventListener("mouseleave", toggleColor);
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


