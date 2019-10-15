//variables
const panels = document.querySelectorAll(".indexPanel");
const links = document.querySelectorAll(".indexLink");
var width = $(window).width();

//Color toggle animation for panel titles
function toggleColor() {
	this.classList.toggle('tColor');
}
//Panel navigation animation for mobile/PC
if (width < 1025) {
	panels.forEach(function (panel) {
		var timeLine = new TimelineMax();
		var tween = timeLine.add(TweenMax.to(panel, 0.5, { filter: "greyscale(0)" }));
		panel.addEventListener("click", toggleAnimation);
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
	links.forEach(function (link) {
		link.addEventListener("click", toggleColor);
	}
	)
}
else {
	panels.forEach(function (panel) {
		var timeLine = new TimelineMax();
		var tween = timeLine.add(TweenMax.to(panel, 0.5, { filter: "greyscale(0)" }));
		panel.addEventListener("mouseenter", toggleAnimation);
		panel.addEventListener("mouseleave", toggleAnimation);
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
	links.forEach(function (link) {
		link.addEventListener("mouseenter", toggleColor);
		link.addEventListener("mouseleave", toggleColor);
	}
	)
}




