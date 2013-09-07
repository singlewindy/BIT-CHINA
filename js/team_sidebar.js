(function() {
        var $w = $(window);
    	var team = $("#team").offset().top;
    	var team_members = $("#team_members").offset().top - 110;
        var instructors = $('#instructors').offset().top - 110;
        var advisors = $('#advisors').offset().top - 110;
        var students_members = $('#students_members').offset().top - 110;
        var AbouttheUniversity = $('#About_the_University').offset().top - 110;
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
            if($w.scrollTop() > AbouttheUniversity)
                    temp.style.height = '150px';
        });

})();

function flipup(){
            var $w = $(window);
            var team = $("#team").offset().top;
            var team_members = $("#team_members").offset().top - 110;
            var instructors = $("#instructors").offset().top - 110;
            var advisors = $('#advisors').offset().top - 110;
            var students_members = $('#students_members').offset().top - 110;

            if($w.scrollTop() > students_members) {
                scrollToElement('students_members', 'normal', 115);
                return;
            }
            if($w.scrollTop() > advisors) {
                scrollToElement('advisors', 'normal', 115);
                return;
            }
            if($w.scrollTop() > instructors) {
                scrollToElement('instructors', 'normal', 115);
                return;
            }
            if($w.scrollTop() > team_members) {
                scrollToElement('team_members', 'normal', 115);
                return;
            }
            else {
                $("body,html").animate({
                    scrollTop:0  //让body的scrollTop等于pos的top，就实现了滚动
                 },1000);
            }         
         }

function flipdown(){
            var $w = $(window);
            var team = $("#team").offset().top;
            var team_members = $("#team_members").offset().top - 110;
            var instructors = $("#instructors").offset().top - 110;
            var advisors = $('#advisors').offset().top - 110;
            var students_members = $('#students_members').offset().top - 110;

            if($w.scrollTop() < team_members) {
                scrollToElement('team_members', 'normal', 105);
                return;
            }
            if($w.scrollTop() < instructors) {
                scrollToElement('instructors', 'normal', 105);
                return;
            }
            if($w.scrollTop() < advisors) {
                scrollToElement('advisors', 'normal', 105);
                return;
            }
            if($w.scrollTop() < students_members) {
                scrollToElement('students_members', 'normal', 105);
                return;
            }      
            else {
                scrollToElement('footer', 'normal', 110);
                return;
            }   
         }
