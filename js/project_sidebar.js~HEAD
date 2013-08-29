(function() {
        var $w = $(window);
	var project = $("#project").offset().top;
	var overview = $("#overview").offset().top - 110;
        var safety = $('#safety').offset().top - 110;

	var temp = document.getElementById("mercury");

        $w.scroll(function() {
        	if($w.scrollTop() > project)
		        temp.style.height = '0px';
        	if($w.scrollTop() > overview)
		        temp.style.height = '25px';
                if($w.scrollTop() > safety)
                                temp.style.height = '325px';
        });

})();