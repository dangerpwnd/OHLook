//variables
const $indexGrid = jQuery(".indexGrid");
const $panels = jQuery(".indexPanel");
const $frontinfo = jQuery(".panel-frontinfo");
const $links = jQuery(".indexLink");

//Color toggle animation for panel titles
function toggleColor() {
  jQuery(this).toggleClass("tColor");
}
$links.hover(toggleColor, toggleColor);


$panels.on("mouseenter", function(e) {
  var $thisPanel = jQuery(this);
  var $action = new TimelineMax().to($thisPanel, 0.3, { x: 100, duration: 1 });
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
      css: {
        backgroundImage: "url(/assets/images/2020index.jpg)",
        backgroundSize: "contain"
      }
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
});

$panels.on("mouseleave", function(e) {
  var $thisPanel = $(this);
  var $action = new TimelineMax()
    .to($thisPanel, 0.3, { x: 0, duration: 1 })
    .set($frontinfo, { backgroundImage: "url(/assets/images/logo.png)" });
});


