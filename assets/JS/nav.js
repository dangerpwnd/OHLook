$(document).ready(function(){
	
	var tl1 = new TimelineMax({paused: false});

	// tl1.set(".navSub",{xPercent:0});

	tl1.add(TweenMax.to(".one", 0.5, {
		y: 6,
		rotation: 45,
		ease: Expo.easeInOut
	}));

	tl1.add(TweenMax.to(".two", 0.5, {
		y:-6,
		rotation: -45,
		ease: Expo.easeInOut,
		delay: -0.5
	}));

	tl1.add(TweenMax.to(".menu", 1, {
		top: "0%",
		ease: Expo.easeInOut,
		delay: -1
	}));

	tl1.add(TweenMax.staggerFrom(".navTop", 1, {
		x: -200,
		opacity: 0,
		ease: Expo.easeOut
	}, 0.2));
	
	tl1.reverse();

	$(".toggle-btn").click(function(){
		tl1.reversed(!tl1.reversed());
	});

	$(".navTop").mouseenter(function(e){
		console.log("Mouse is on");
	});

	$(".navTop").mouseleave(function(e){
		console.log("Mouse is off")
	})






	// $(".navTop").hover(function() {
	// TweenMax.staggerFrom($("navSub"), 1, {
	// 	opacity: 0,
	// 	ease: Expo.easeOut
	// })});
	
// 	tl2.add($(".navTopCl").hover(function() {
// 		TweenMax.staggerFrom($(".navSubCl"), 1, {
// 		display: "block",
// 		opacity: 0,
// 		ease: Expo.easeOut
// 	})}));

// 	tl2.add($(".navTopD").hover(function() {
// 	TweenMax.staggerFrom($(".navSubD"), 1, {
// 	display: "block",
// 	opacity: 0,
// 	ease: Expo.easeOut
// 	})}));

// 	tl2.reverse();
// 	return tl2();
});