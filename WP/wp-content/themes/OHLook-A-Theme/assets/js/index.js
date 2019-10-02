jQuery(document).ready(function( $ ) {
	
	//Animation for index
	const panels = document.querySelectorAll('.panel');
	var width = $(window).width();

	function toggleOpen() {
		this.classList.toggle('open');
	}
	function toggleActive(e) {
		if (e.propertyName.includes('flex')) {
			this.classList.toggle('open-active');
		}
	}

	if(width < 1025){
		// Hover over item to expand and add open class
		panels.forEach(panel => panel.addEventListener('click', toggleOpen));
		//Will toggle open-active on flexed items at end of transition
		panels.forEach(function(panel){
		if(!panel.className.includes('toggleActive')){
		panel.addEventListener('transitionend', toggleActive);}})
	}
	else{
		panels.forEach(panel => panel.addEventListener('mouseenter', toggleOpen));
		panels.forEach(panel => panel.addEventListener('mouseleave', toggleOpen));
	
		//Will toggle open-active on flexed items at end of transition
		panels.forEach(function(panel){
		if(!panel.className.includes('toggleActive')){
			panel.addEventListener('transitionend', toggleActive);}})
	}
	
});


	
	