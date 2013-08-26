(function() {
        var $w = $(window);
	var team = $("#team").offset().top;
	var team_members = $("#team_members").offset().top - 110;
        var instructors = $('#instructors').offset().top - 110;
        var advisors = $('#advisors').offset().top - 110;
        var students_members = $('#students_members').offset().top - 110;
		var temp = document.getElementById("mercury");

        $w.scroll(function() {
        	if($w.scrollTop() > team)
		        temp.style.height = '0px';
        	if($w.scrollTop() > team_members)
		        temp.style.height = '25px';
        	if($w.scrollTop() > instructors)
			temp.style.height = '50px';
                if($w.scrollTop() > advisors)
                        temp.style.height = '75px';
                if($w.scrollTop() > students_members)
                        temp.style.height = '100px';
        });

})();