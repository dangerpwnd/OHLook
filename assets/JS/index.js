//variables
const $indexGrid = jQuery(".indexGrid");
const $panels = jQuery(".indexPanel");
const $frontinfo = jQuery(".panel-frontinfo");
const $links = jQuery(".indexLink");

//Color toggle animation for panel titles
function toggleColor() {
  jQuery(this).classList.toggle("tColor");
}

// //Active class toggle
// function toggleActive() {
// 	jQuery(this).toggleClass('Active');
// }

$panels.on("mouseenter", function(e) {
  var $thisPanel = jQuery(this);
  var $action = new TimelineMax()
    .to($thisPanel, 0.3, { x: 100, duration: 1 });
  if ($thisPanel.hasClass("panel-front1")) {
    $action.set($frontinfo, {
      backgroundImage: "url(/assets/images/front1.jpg)"
    });
  } else if ($thisPanel.hasClass("panel-front2")) {
    $action.set($frontinfo, {
      backgroundImage: "url(/assets/images/dance.jpg)"
    });
  } else if ($thisPanel.hasClass("panel-front3")) {
    $action.set($frontinfo, {
      backgroundImage: "url(/assets/images/front5.JPG)"
    });
  } else if ($thisPanel.hasClass("panel-front4")) {
    $action.set($frontinfo, {
      backgroundImage: "url(/assets/images/front8.jpg)"
    });
  } else if ($thisPanel.hasClass("panel-front5")) {
    $action.set($frontinfo, {
      backgroundImage: "url(/assets/images/2020index.jpg)"
    });
  } else if ($thisPanel.hasClass("panel-front6")) {
    $action.set($frontinfo, {
      backgroundImage: "url(/assets/images/front4.JPG)"
    });
  } else if ($thisPanel.hasClass("panel-front7")) {
    $action.set($frontinfo, {
      backgroundImage: "url(/assets/images/front6.JPG)"
    });
  } else if ($thisPanel.hasClass("panel-front8")) {
    $action.set($frontinfo, {
      backgroundImage: "url(/assets/images/xanadu.jpg)"
    });
  } else {
    return;
  }

  }
);

$panels.on("mouseleave", function(e) {
  var $thisPanel = $(this);
  var $action = new TimelineMax()
  .to($thisPanel, 0.3, { x: 0, duration: 1 })
  .set($frontinfo, {backgroundImage: "url(/assets/images/logo.png)"})
});

//Event Listeners

// jQuery.each(panels, function(){
// 	jQuery(this).hover(toggleActive, toggleActive);
// })

//Panel navigation animation for mobile/PC

// 	jQuery.each(panels, function (panel) {
// 		var timeLine = new TimelineMax();
// 		var tween = timeLine.add(TweenMax.to(panel, 0.5, { x: 100, duration: 1 }));
// 		if(jQuery(this).hasClass('panel-front1') && jQuery(this).hasClass('Active')){
// 			let tween2 = timeLine.set(frontinfo, { backgroundImage:'url(/assets/images/front1.jpg)'});
// 		}
// 		else if(jQuery(this).hasClass('panel-front2') && jQuery(this).hasClass('Active')){
// 			let tween2 = timeLine.set(frontinfo, { backgroundImage:'url(/assets/images/dance.jpg)'});
// 		}
// 		else if(jQuery(this).hasClass('panel-front3') && jQuery(this).hasClass('Active')){
// 			let tween2 = timeLine.set(frontinfo, { backgroundImage:'url(/assets/images/front5.JPG)'});
// 		}
// 		else if(jQuery(this).hasClass('panel-front4') && jQuery(this).hasClass('Active')){
// 			let tween2 = timeLine.set(frontinfo, { backgroundImage:'url(/assets/images/front8.jpg)'});
// 		}
// 		else if(jQuery(this).hasClass('panel-front5') && jQuery(this).hasClass('Active')){
// 			let tween2 = timeLine.set(frontinfo, { backgroundImage:'url(/assets/images/2020index.jpg)'});
// 		}
// 		else if(jQuery(this).hasClass('panel-front6') && jQuery(this).hasClass('Active')){
// 			let tween2 = timeLine.set(frontinfo, { backgroundImage:'url(/assets/images/front4.JPG)'});
// 		}
// 		else if(jQuery(this).hasClass('panel-front7') && jQuery(this).hasClass('Active')){
// 			let tween2 = timeLine.set(frontinfo, { backgroundImage:'url(/assets/images/front6.JPG)'});
// 		}
// 		else if(jQuery(this).hasClass('panel-front8') && jQuery(this).hasClass('Active')){
// 			let tween2 = timeLine.set(frontinfo, { backgroundImage:'url(/assets/images/xanadu.jpg)'});
// 		}
// 		else{
// 			return;
// 		}
// 		jQuery(this).hover(toggleAnimation, toggleAnimation);
// 		timeLine.reverse();
// 		function toggleAnimation() {
// 			if (timeLine.reversed()) {
// 				timeLine.play();
// 			}
// 			else {
// 				timeLine.reverse();
// 			}
// 		}
// 	}
// 	);

// // Color Toggle Animation
// 	links.forEach(function (link) {
// 		link.addEventListener("mouseenter", toggleColor);
// 		link.addEventListener("mouseleave", toggleColor);
// 	}
// 	);
