jQuery(document).ready(function(){
    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    //loop thru each .project element
    jQuery('.pic').each(function(){
            //build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '60%'
    })
    .setClassToggle(this, 'fade-in') //add class to firstpic
    // .addIndicators({
    //     name: 'fade scene',
    //     colorTrigger: 'black',
    //     colorStart: '#75C695',
    //     colorEnd: 'pink'
    // }) //requires a plugin
    .addTo(controller);
    })

})


