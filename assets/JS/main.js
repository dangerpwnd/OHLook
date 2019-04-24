function(){

	var abutton = document.getElementById('about-button'),
    awrapper = document.getElementById('about-wrapper');
	var dbutton = document.getElementById('donate-button'),
    dwrapper = document.getElementById('donate-wrapper');
	var	clbutton = document.getElementById('class-button'),
	  clwrapper = document.getElementById('class-wrapper');
	var	cabutton = document.getElementById('camp-button'),
		cawrapper = document.getElementById('camp-wrapper');
	var	pbutton = document.getElementById('prod-button'),
		pwrapper = document.getElementById('prod-wrapper');
    //open and close menu when the button is clicked
	var aopen = false;
	var dopen = false;
	var clopen = false;
	var caopen = false;
	var popen = false;
	button.addEventListener('click', ahandler, false);
	button.addEventListener('click', dhandler, false);
	button.addEventListener('click', clhandler, false);
	button.addEventListener('click', cahandler, false);
	button.addEventListener('click', phandler, false);

	function ahandler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function dhandler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function clhandler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function cahandler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function phandler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();
