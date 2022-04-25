$(function() {
	smoothScroll(350);

	$('.active-mark').css('left', $('.client-unit').outerWidth(true)/2-10+'px');

	$('#hamburger').one('click', function(){
		$(this).addClass('hamburger-basic');
	}); 

	$('#hamburger').on('click',function(){
		
		$(this).toggleClass('hamburger-active hamburger-basic');
		$('.links').toggleClass('links-active');
		$('.center').toggleClass('center-remove');
		
	})

	$('header nav a').on('click',function(){
		$('#hamburger').trigger('click');
	})

	$('.client-unit').on('click',function(){
		var child =  $('.client-unit').index(this);
		var x = $('.client-unit').outerWidth(true);
		var left = x / 2 - 10;
		$('.active-mark').css('left', left+child*x+'px');
		$('.client-unit').removeClass('active');
		$(this).addClass('active');
		$('.quote').removeClass('quote-active');
		$('.quote:nth-child('+(child+1)+')').addClass('quote-active');
	})

	$('.next').on('click',function(){
		var child = $('.client-unit.active').index()+1;
		if(child>5) child = 0;
		child+=1;
		$('.client-unit:nth-child('+child+')').trigger('click');
	})

	$('.previous').on('click',function(){
		var child = $('.client-unit.active').index()+1;
		if(child<=1) child = 7;
		child-=1;
		$('.client-unit:nth-child('+child+')').trigger('click');
	})

	var resizeTimer;

	$(window).on('resize', function(e) {

	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {

		var child = $('.client-unit.active').index();
		var x = $('.client-unit').outerWidth(true);
		var left = x / 2 - 10;
		$('.active-mark').css('left', left+child*x+'px');
				
	}, 320);

	});
})

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
            event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top-50
	        }, duration);
	    }
	});
}
