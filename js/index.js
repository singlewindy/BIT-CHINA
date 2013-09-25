(function() {
        var $w = $(window);

        $w.scroll(function() {
        	$('.header-icon div, .wrap > h1, .wrap > h2, #googlemap').each(function(index) {
				var section_top = $(this).offset().top;

				if ($w.scrollTop() >= section_top - 400 && $(this).hasClass('invisible')) {
					$(this).removeClass('invisible');

					if ($(this).is('.header-icon div')) {
						var self = this;

						setTimeout(function() {
							$(self).parent().removeClass('invisible');
						}, 1000);

						$(this).animate({
							height: 128,
							marginLeft: 0,
							marginTop: 0,
							opacity: 1,
							width: 128
						}, {
							duration: 1000,
							queue: false
						});
					} else {
						$(this).animate({
							marginLeft: 0,
							opacity: 1
						}, {
							duration: 500
						});
					}
				} else if ($w.scrollTop() < section_top - 400 && !$(this).hasClass('invisible')) {
					$(this).addClass('invisible');

					if ($(this).is('.header-icon div')) {
						$(this).parent().addClass('invisible');

						$(this).animate({
							height: 0,
							marginLeft: 64,
							marginTop: 64,
							opacity: 0,
							width: 0
						}, {
							duration: 500,
							queue: false
						});
					} else {
						$(this).animate({
							marginLeft: (index % 2 ? -284 : 284),
							opacity: 0
						}, {
							duration: 500,
							queue: false
						});
					}
				}
		});

			
		$('#sitemap section, .sun').each(function(index) {
			var section_top_start = $(this).offset().top - 300;
			var section_top_end = $(this).offset().top - 400;

			var element = $(this);
			var animation;
			if ($(this).is('.sun'))
				animation = 'sunentrance';
			else
				animation = 'bounce';

			if ($w.scrollTop() >= section_top_start && !element.hasClass(animation)) {

				element.css({
					opacity: 1,
					zIndex: 3
				}).addClass(animation);

			} else if ($w.scrollTop() < section_top_end && element.hasClass(animation)) {
				element.removeClass(animation).animate({
					opacity: 0
				}, {
					duration: 100,
					queue: false,
					
					complete: function() {
						$(this).css('zIndex', -1);
					}
				});
			}
		});
            
    });

	$(document).ready(function(){
		$("#idea").hover(function(){
		  $("#laptop-screen").css("background", "rgba(58, 153, 211, 0.85)");
		  $("#cover").css("background-color", "rgb(58, 153, 211)");
		  $("#display-img-idea").css("display", "block");
		  $("#display-img-idea").css("visibility", "visible");
		  $("#display-img-advantage").css("display", "none");
		  $("#display-img-advantage").css("visibility", "hidden");
		  $("#display-img-description").css("display", "none");
		  $("#display-img-description").css("visibility", "hidden");
		  $("#display-img-charactors").css("display", "none");
		  $("#display-img-charactors").css("visibility", "hidden");
		  $("#display-img-extent").css("display", "none");
		  $("#display-img-extent").css("visibility", "hidden");
		  $("#display-content-idea").css("display", "block");
		  $("#display-content-idea").css("visibility", "visible");
		  $("#display-content-advantage").css("display", "none");
		  $("#display-content-advantage").css("visibility", "hidden");
		  $("#display-content-description").css("display", "none");
		  $("#display-content-description").css("visibility", "hidden");
		  $("#display-content-charactors").css("display", "none");
		  $("#display-content-charactors").css("visibility", "hidden");
		  $("#display-content-extent").css("display", "none");
		  $("#display-content-extent").css("visibility", "hidden");
		},function(){
		});

		$("#advantage").hover(function(){
		  $("#laptop-screen").css("background", "rgba(133, 133, 197, 0.85)");
		  $("#cover").css("background-color", "rgb(133, 133, 197)");
		  $("#display-img-advantage").css("display", "block");
		  $("#display-img-advantage").css("visibility", "visible");
		  $("#display-img-idea").css("display", "none");
		  $("#display-img-idea").css("visibility", "hidden");
		  $("#display-img-description").css("display", "none");
		  $("#display-img-description").css("visibility", "hidden");
		  $("#display-img-charactors").css("display", "none");
		  $("#display-img-charactors").css("visibility", "hidden");
		  $("#display-img-extent").css("display", "none");
		  $("#display-img-extent").css("visibility", "hidden");
		  $("#display-content-advantage").css("display", "block");
		  $("#display-content-advantage").css("visibility", "visible");
		  $("#display-content-idea").css("display", "none");
		  $("#display-content-idea").css("visibility", "hidden");
		  $("#display-content-description").css("display", "none");
		  $("#display-content-description").css("visibility", "hidden");
		  $("#display-content-charactors").css("display", "none");
		  $("#display-content-charactors").css("visibility", "hidden");
		  $("#display-content-extent").css("display", "none");
		  $("#display-content-extent").css("visibility", "hidden");
		},function(){
		});

		$("#description").hover(function(){
		  $("#laptop-screen").css("background", "rgba(234, 58, 58, 0.85)");
		  $("#cover").css("background-color", "rgb(234, 58, 58)");
		  $("#display-img-description").css("display", "block");
		  $("#display-img-description").css("visibility", "visible");
		  $("#display-img-advantage").css("display", "none");
		  $("#display-img-advantage").css("visibility", "hidden");
		  $("#display-img-idea").css("display", "none");
		  $("#display-img-idea").css("visibility", "hidden");
		  $("#display-img-charactors").css("display", "none");
		  $("#display-img-charactors").css("visibility", "hidden");
		  $("#display-img-extent").css("display", "none");
		  $("#display-img-extent").css("visibility", "hidden");
		  $("#display-content-description").css("display", "block");
		  $("#display-content-description").css("visibility", "visible");
		  $("#display-content-advantage").css("display", "none");
		  $("#display-content-advantage").css("visibility", "hidden");
		  $("#display-content-idea").css("display", "none");
		  $("#display-content-idea").css("visibility", "hidden");
		  $("#display-content-charactors").css("display", "none");
		  $("#display-content-charactors").css("visibility", "hidden");
		  $("#display-content-extent").css("display", "none");
		  $("#display-content-extent").css("visibility", "hidden");
		},function(){
		});

		$("#charactors").hover(function(){
		  $("#laptop-screen").css("background", "rgba(255, 165, 0, 0.85)");
		  $("#cover").css("background-color", "rgb(255, 165, 0)");
		  $("#display-img-charactors").css("display", "block");
		  $("#display-img-charactors").css("visibility", "visible");
		  $("#display-img-advantage").css("display", "none");
		  $("#display-img-advantage").css("visibility", "hidden");
		  $("#display-img-description").css("display", "none");
		  $("#display-img-description").css("visibility", "hidden");
		  $("#display-img-idea").css("display", "none");
		  $("#display-img-idea").css("visibility", "hidden");
		  $("#display-img-extent").css("display", "none");
		  $("#display-img-extent").css("visibility", "hidden");
		  $("#display-content-charactors").css("display", "block");
		  $("#display-content-charactors").css("visibility", "visible");
		  $("#display-content-advantage").css("display", "none");
		  $("#display-content-advantage").css("visibility", "hidden");
		  $("#display-content-description").css("display", "none");
		  $("#display-content-description").css("visibility", "hidden");
		  $("#display-content-idea").css("display", "none");
		  $("#display-content-idea").css("visibility", "hidden");
		  $("#display-content-extent").css("display", "none");
		  $("#display-content-extent").css("visibility", "hidden");
		},function(){
		});

		$("#extend").hover(function(){
		  $("#laptop-screen").css("background", "rgba(118, 181, 71, 0.85)");
		  $("#cover").css("background-color", "rgb(118, 181, 71)");
		  $("#display-img-extend").css("display", "block");
		  $("#display-img-extend").css("visibility", "visible");
		  $("#display-img-advantage").css("display", "none");
		  $("#display-img-advantage").css("visibility", "hidden");
		  $("#display-img-description").css("display", "none");
		  $("#display-img-description").css("visibility", "hidden");
		  $("#display-img-charactors").css("display", "none");
		  $("#display-img-charactors").css("visibility", "hidden");
		  $("#display-img-idea").css("display", "none");
		  $("#display-img-idea").css("visibility", "hidden");
		  $("#display-content-extend").css("display", "block");
		  $("#display-content-extend").css("visibility", "visible");
		  $("#display-content-advantage").css("display", "none");
		  $("#display-content-advantage").css("visibility", "hidden");
		  $("#display-content-description").css("display", "none");
		  $("#display-content-description").css("visibility", "hidden");
		  $("#display-content-charactors").css("display", "none");
		  $("#display-content-charactors").css("visibility", "hidden");
		  $("#display-content-idea").css("display", "none");
		  $("#display-content-idea").css("visibility", "hidden");
		},function(){
		});

		
	})

})();