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
        	if($w.scrollTop() > journal) {
                temp.style.height = '25px';
                day('#feb_1', 'del');
            }
        	if($w.scrollTop() > feb) {
                temp.style.height = '50px';
                day('#feb_1', 'add');
                day('#mar_1', 'del');
            }
            if($w.scrollTop() > mar) {
                temp.style.height = '75px';
                day('#feb_1', 'del');
                day('#mar_1', 'add');
                day('#apr_1', 'del');
            }
            if($w.scrollTop() > apr) {
                temp.style.height = '100px';
                day('#mar_1', 'del');
                day('#apr_1', 'add');
                day('#may_1', 'del');
            }
            if($w.scrollTop() > may) {
                temp.style.height = '125px';
                day('#apr_1', 'del');
                day('#may_1', 'add');
                day('#jun_1', 'del');
            }
            if($w.scrollTop() > jun) {
                temp.style.height = '150px';
                day('#may_1', 'del');
                day('#jun_1', 'add');
                day('#jul_1', 'del');
            }
            if($w.scrollTop() > jul) {
                temp.style.height = '175px';
                day('#jun_1', 'del');
                day('#jul_1', 'add');
                day('#aug_1', 'del');
            }
            if($w.scrollTop() > aug) {
                temp.style.height = '205px';
                day('#jul_1', 'del');
                day('#aug_1', 'add');
                day('#sep_1', 'del');
            }
            if($w.scrollTop() > sep) {
                temp.style.height = '235px';
                day('#aug_1', 'del');
                day('#sep_1', 'add');
            }
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

function day(idstr, op){
    if (op == 'add' && $(idstr).hasClass('fold')) {
       $(idstr).removeClass('fold').animate({
            opacity: 1,
        }, {
            duration: 500,
            queue: false
        });
    } else if(op == 'del') {
       $(idstr).addClass('fold').animate({
            opacity: 0,
        }, {
            duration: 10,
            queue: false
        });
    }
}