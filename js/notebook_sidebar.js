(function() {
        var $w = $(window);
		var notebook = $("#notebook").offset().top;
		var journal = $("#journal").offset().top - 110;
        var feb = $('#feb').offset().top - 110;
        var mar = $('#mar').offset().top - 110;
        var apr = $('#apr').offset().top - 110;
        var may = $('#may').offset().top - 110;
        var jun = $('#jun').offset().top - 110;
        var jul = $('#jul').offset().top - 110;
        var aug = $('#aug').offset().top - 110;
        var sep = $('#sep').offset().top - 110;
		var temp = document.getElementById("mercury");

        $w.scroll(function() {
        	if($w.scrollTop() > notebook)
		        temp.style.height = '0px';
        	if($w.scrollTop() > journal)
		        temp.style.height = '25px';
        	if($w.scrollTop() > feb)
				temp.style.height = '50px';
            if($w.scrollTop() > mar)
                temp.style.height = '75px';
            if($w.scrollTop() > apr)
                temp.style.height = '100px';
            if($w.scrollTop() > may)
                temp.style.height = '125px';
            if($w.scrollTop() > jun)
                temp.style.height = '150px';
            if($w.scrollTop() > jul)
                temp.style.height = '175px';
            if($w.scrollTop() > aug)
                temp.style.height = '205px';
            if($w.scrollTop() > sep)
                temp.style.height = '235px';
            if ($('#mercury').height() > 100) {
                $('.temp.tem37').animate({
                            opacity: 1,
                        }, {
                            duration: 100,
                            queue: false
                        });
            } else {
                $('.temp.tem37').animate({
                            opacity: 0,
                        }, {
                            duration: 100,
                            queue: false
                        });
            };

            if ($('#mercury').height() > 200) {
                $('.temp.tem40').animate({
                            opacity: 1,
                        }, {
                            duration: 100,
                            queue: false
                        });
            } else {
                $('.temp.tem40').animate({
                            opacity: 0,
                        }, {
                            duration: 100,
                            queue: false
                        });
            };

            if ($('#mercury').height() > 300) {
                $('.temp.tem43').animate({
                            opacity: 1,
                        }, {
                            duration: 100,
                            queue: false
                        });
            } else {
                $('.temp.tem43').animate({
                            opacity: 0,
                        }, {
                            duration: 100,
                            queue: false
                        });
            };
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

function flipdown(){
            var $w = $(window);
            var project = $("#project").offset().top;
            var overview = $("#overview").offset().top - 110;
            var safety = $('#safety').offset().top - 110;

            if($w.scrollTop() < overview) {
                scrollToElement('overview', 'normal', 105);
                return;
            }
            if($w.scrollTop() < safety) {
                scrollToElement('safety', 'normal', 105);
                return;
            }      
            else {
                scrollToElement('footer', 'normal', 110);
                return;
            }   
         }

function day(idstr){
    if ($(idstr).hasClass('fold')) {
       $(idstr).removeClass('fold').animate({
            opacity: 1,
        }, {
            duration: 500,
            queue: false
        });
    } else {
       $(idstr).addClass('fold').animate({
            opacity: 0,
        }, {
            duration: 500,
            queue: false
        });
    }
}