$(document).ready(function(){
	var tl1 = new TimelineMax({paused: false});

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

	tl1.add(TweenMax.staggerFrom(".navtop", 1, {
		x: -200,
		opacity: 0,
		ease: Expo.easeOut
	}, 0.2));
	
	tl1.reverse();

	$(".toggle-btn").click(function(){
		tl1.reversed(!tl1.reversed());
	});

var tl2 = new TimelineMax({paused: false});

	tl2.add($(".navTopP").hover(function() {
		TweenMax.staggerFrom($(".navSubP"), 1, {
		display: "block",
		opacity: 0,
		ease: Expo.easeOut
	})}));
	
	tl2.add($(".navTopCl").hover(function() {
		TweenMax.staggerFrom($(".navSubCl"), 1, {
		display: "block",
		opacity: 0,
		ease: Expo.easeOut
	})}));

	tl2.add($(".navTopCa").hover(function() {
	TweenMax.staggerFrom($(".navSubCa"), 1, {
	display: "block",
	opacity: 0,
	ease: Expo.easeOut
	})}));

	tl2.add($(".navTopD").hover(function() {
	TweenMax.staggerFrom($(".navSubD"), 1, {
	display: "block",
	opacity: 0,
	ease: Expo.easeOut
	})}));

	tl2.reverse();
	return tl2();
});