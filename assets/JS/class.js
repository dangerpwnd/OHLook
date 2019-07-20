//variables
const closeB = document.querySelectorAll(".closeButton");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const mClick = document.querySelectorAll(".modalClick");
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

//Modal functionality

// Event Listeners
//Button Click toggle class
mClick.forEach(function (button) {
    button.addEventListener("click", function toggleModal() {
        if (this.classList.contains("mClick1")) {
            modal1.classList.toggle("showModal");
        }
        else if (this.classList.contains("mClick2")) {
            modal2.classList.toggle("showModal");
        }
        else if (this.classList.contains("mClick3")) {
            modal3.classList.toggle("showModal");
        }
        else {
            console.log("Modal not working");
        }
    });
})
//Close button toggle class
closeB.forEach(function (close) {
    close.addEventListener("click", function toggleModal() {
        if (modal1.classList.contains("showModal")) {
            modal1.classList.toggle("showModal");
        }
        else if (modal2.classList.contains("showModal")) {
            modal2.classList.toggle("showModal");
        }
        else if (modal3.classList.contains("showModal")) {
            modal3.classList.toggle("showModal");
        }
        else {
            console.log("Close button not working");
        }
    });
})
//Window click toggle class
document.addEventListener("click", function toggleModal(event) {
    if (event.target.matches(".showModal")) {
        console.log(event.target);
        (event.target).classList.remove('showModal');
    }
});
