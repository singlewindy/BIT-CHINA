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

function flipup(){
            var $w = $(window);
            var project = $("#project").offset().top;
            var overview = $("#overview").offset().top - 110;
            var safety = $('#safety').offset().top - 110;

            if($w.scrollTop() > safety) {
                scrollToElement('safety', 'normal', 115);
                return;
            }
            if($w.scrollTop() > overview) {
                scrollToElement('overview', 'normal', 115);
                return;
            }
            else {
                $("body,html").animate({
                    scrollTop:0  //让body的scrollTop等于pos的top，就实现了滚动
                 },1000);
            }         
         }