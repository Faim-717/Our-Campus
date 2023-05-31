var ajaxLoading = false;
var response_form;

function parallaxIt(e, cont, target, movement) {
      var $this = cont;
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }

function OnResize()
{
	
	$(".full_height").height($(window).height()- $("#header").outerHeight());	
	$(".full_height2").height(($(window).height()- $("#header").outerHeight())*1.5);	
	$(".full_width").width($(window).width());
	
	
}

function ValutaHeaderMobile(arg)
{
	
	if(!arg.hasClass("on"))
	{
		OpenMenuMobile(arg);
	}
	else
	{
		CloseMenuMobile(arg);		
	}
}

function OpenMenuMobile(arg)
{
	if(arg.is(":visible"))
	{
		$(".header .menu").addClass("on");
		arg.addClass("on");
	}
	
}

function CloseMenuMobile(arg)
{
	if(arg.is(":visible"))
	{
		$(".header .menu").removeClass("on");
		arg.removeClass("on");		
		
	}
}




