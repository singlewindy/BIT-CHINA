(function() {
        var $w = $(window);
		var notebook = $("#notebook").offset().top;
		var journal = $("#journal").offset().top - 110;
        var human_practice = $('#human_practice').offset().top - 110;
		var temp = document.getElementById("mercury");

        $w.scroll(function() {
        	if($w.scrollTop() > notebook)
		        temp.style.height = '0px';
        	if($w.scrollTop() > journal)
		        temp.style.height = '25px';
        	if($w.scrollTop() > human_practice)
				temp.style.height = '50px';
        });

})();