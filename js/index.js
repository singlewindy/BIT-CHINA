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

			
		$('#sitemap section').each(function(index) {
			var section_top_start = $(this).offset().top - 300;
			var section_top_end = $(this).offset().top - 400;

			var element = $(this);
			var animation = 'bounce';

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

})();