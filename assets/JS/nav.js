$(document).ready(function(){
	
	var tl1 = new TimelineMax({paused: false});

	tl1.set(".navSub",{xPercent:0});

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

	$(".navTop").hover(over, out);
	function over(){
		$navs = $(this).find('.navSub');
		TweenMax.staggerTo($navs, 1, {
			autoAlpha: 1,
			visibility:'visible', 
			ease: Power2.easeOut
		}, 0.3);
	}
	function out(){
		$navs = $(this).find('.navSub');
		TweenMax.staggerTo($navs, 1, {
			autoAlpha: 0,
			visibility:'hidden', 
			ease: Power2.easeOut
		}, 0.3)
	}

});