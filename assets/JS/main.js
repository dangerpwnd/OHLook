$(document).ready(function(){
	var tl = new TimelineMax({paused: false});

	tl.add(TweenMax.to(".one", 0.5, {
		y: 6,
		rotation: 45,
		ease: Expo.easeInOut
	}));

	tl.add(TweenMax.to(".two", 0.5, {
		y:-6,
		rotation: -45,
		ease: Expo.easeInOut,
		delay: -0.5
	}));

	tl.add(TweenMax.to(".menu", 1, {
		top: "0%",
		ease: Expo.easeInOut,
		delay: -1
	}));

	tl.add(TweenMax.staggerFrom(".navtop", 1, {
		x: -200,
		opacity: 0,
		ease: Expo.easeOut
	}, 0.2));
	
	tl.reverse();

	$(".toggle-btn").click(function(){
		tl.reversed(!tl.reversed());
	});

});

$(".navTopP").click(function() {
	if($(".navSubP").style.display === none){
	TweenMax.staggerFrom($(".navSubP"), 1, {
	display: "block",
	opacity: 0,
	ease: Expo.easeOut
	})}
	else{
		$(".navSubP").style.display === none;
	}
	});

$(".navTopCl").click(function() {
	TweenMax.staggerFrom($(".navSubCl"), 1, {
	display: "block",
	opacity: 0,
	ease: Expo.easeOut
	})});

$(".navTopCa").click(function() {
	TweenMax.staggerFrom($(".navSubCa"), 1, {
	display: "block",
	opacity: 0,
	ease: Expo.easeOut
	})});

$(".navTopD").click(function() {
	TweenMax.staggerFrom($(".navSubD"), 1, {
	display: "block",
	opacity: 0,
	ease: Expo.easeOut
	})});
