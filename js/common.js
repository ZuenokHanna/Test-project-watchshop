$(document).ready(function() {

	$('.owl-carousel-1').owlCarousel({
		animateOut: 'fadeOut',
		items:1,
		dots:true,
		mouseDrag: false,
		autoplay:true,
		autoplayTimeout: 3000
	});

	$('.owl-carousel-2').owlCarousel({
		animateOut: 'fadeOut',
		items:1,
		dots:false,
		nav: true,
		navText: [],
		mouseDrag: false,
    // autoplay:true
  });

	$('.owl-carousel-3').owlCarousel({
		loop:false,
		nav:true,
		navText: [],
		autoplay: false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			575:{
				items:2
			},
			768:{
				items:3
			}
		}
	})

	$('.owl-carousel-4').owlCarousel({
		loop:false,
		nav:true,
		navText: [],
		autoplay: false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			575:{
				items:2
			},
			768:{
				items:3
			}
		}
	})

	$('.owl-carousel-5').owlCarousel({
		loop:false,
		nav:false,
		autoplay: false,
		dots: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			}
		}
	})

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target // newly activated tab
        e.relatedTarget // previous active tab
        $(".owl-carousel").trigger('refresh.owl.carousel');
      });

	var route=$("#menu-wr").offset().left;
	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		if ($("#menu-wr").offset().left<0) $("#menu-wr").animate({left:0},500);
		else $("#menu-wr").animate({left:route},500);
	});


});