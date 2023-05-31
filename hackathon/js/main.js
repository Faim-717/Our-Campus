
var preloadPictures = function(pictureUrls, callback) {
    var i,
        j,
        loaded = 0;

    for (i = 0, j = pictureUrls.length; i < j; i++) {
        (function (img, src) {
            img.onload = function () {                               
                if (++loaded == pictureUrls.length && callback) {
                    callback();
                }
            };

            // Use the following callback methods to debug
            // in case of an unexpected behavior.
            img.onerror = function () {};
            img.onabort = function () {};

            img.src = src;
        } (new Image(), pictureUrls[i]));
    }
};



var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	}; 

var blocca_scroll = false;
var fullscreen = 0;
var old_percent = 0;
var viv = new Array();
var od;
var risp_corr = new Array("a","b","b","a","b");

(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));


$(document).ready(function ()
{



$(".anim").addClass("off");

$(".animated_svg").each(function(){
	viv[viv.length] = new Vivus($(this).attr("id"), { duration: 500,type:'oneByOne' });
});

$(window).bind('resize', function(e) {

	if( e.target != window ) return;
	OnResize();
});

OnResize();

$("#menuButton").click(function(){
		ValutaHeaderMobile($(this));
	});

  $('.challange-container').slick({
      slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: false,
    fade: true,
    arrows: true,
     responsive: [
  {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        dots: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        dots: true,
      }
    },
    {
      breakpoint: 482,
      settings: {
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
      }
    }
  ]
  });

  $('.speakers-container').slick({
      slidesToShow: 4,
	  slidesToScroll: 4,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  dots: true,
	  arrows: false,
	   responsive: [
	{
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 4000,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 3000,
        dots: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 2000,
        dots: true,
      }
    },
    {
      breakpoint: 482,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
      }
    }
  ]
  });

  $('.tutor-container').slick({
      slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
     responsive: [
  {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 4000,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 3000,
        dots: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 2000,
        dots: true,
      }
    },
    {
      breakpoint: 482,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
      }
    }
  ]
  });

  $('.programma-container').slick({
      slidesToShow: 4,
	  slidesToScroll: 4,
    infinite: false,
	  dots: false,
	  arrows: true,
	   responsive: [
	{
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 4000,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 3000,
        dots: false,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 2000,
        dots: false,
      }
    },
    {
      breakpoint: 482,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
      }
    }
  ]
  });

  $('.programma-container-2').slick({
      slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    dots: false,
    arrows: true,
     responsive: [
  {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 4000,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 3000,
        dots: false,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 2000,
        dots: false,
      }
    },
    {
      breakpoint: 482,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
      }
    }
  ]
  });

   $('.faq-container').slick({
      slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: true,
	   responsive: [
	{
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        dots: false,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        dots: false,
      }
    },
    {
      breakpoint: 482,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
      }
    }
  ]
  });


	$(window).load(function(){
		
    $("[data-paroller-factor]").paroller();
    
		$(".anim").inViewport(function(px){
			//console.log(px);
			
		    if(px){ 
				let delay = 0;
				if(typeof $(this).data("delay") !== "undefined")
					delay = $(this).data("delay");
				let elem = $(this);
				if(elem.hasClass("off"))
				{
					setTimeout(function(){
						if(elem.hasClass("off"))
						{
							elem.addClass("transition");
							elem.removeClass("off");
						}
					},delay);
				}	
			}
		});	
		
		

		$("#visore").mousemove(function(e) {
			parallaxIt(e,$(this),".object1", 20);
     		 parallaxIt(e,$(this),".object2", -10);
	  		parallaxIt(e,$(this),".object3", -40);
    	});
	});


	/*
	
	$("#goToTop").click(function(){
		if(!blocca_scroll)
		{
			blocca_scroll = true;
			$("body").scrollTo(0,{axis:'y', duration:1000,onAfter:function(){blocca_scroll = false;}});
		}
		
	}); */

	$(".scrollto").click(function(){
		$("body").scrollTo($("#" + $(this).data("rel")),{axis:'y', duration:1000,offset:-$("#header").outerHeight()});
	});

  

});
	
	
