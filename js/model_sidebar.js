(function() {
        var $w = $(window);
		var modeling = $("#modeling").offset().top;
		var overview = $("#overview").offset().top - 110;
        var human_practice = $('#human_practice').offset().top - 110;
		var temp = document.getElementById("mercury");

        $w.scroll(function() {
        	if($w.scrollTop() > modeling)
		        temp.style.height = '0px';
        	if($w.scrollTop() > overview)
		        temp.style.height = '25px';
        	if($w.scrollTop() > human_practice)
				temp.style.height = '50px';
        });

})();