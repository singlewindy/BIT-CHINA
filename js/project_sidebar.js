(function() {
    var $w = $(window);
	var project = $("#project").offset().top;
	var overview = $("#overview").offset().top - 110;
    var mab = $("#mab").offset().top - 110;
    var faq = $("#faq").offset().top - 110;
    var CT = $("#CT").offset().top - 110;
    var rt = $("#rt").offset().top - 110;
    var hsps = $("#hsps").offset().top - 110;
    var QC = $("#QC").offset().top - 110;
    var QS = $("#QS").offset().top - 110;
    var Iv = $("#Iv").offset().top - 110;
    var PCD = $("#PCD").offset().top - 110;
    var parts = $("#parts").offset().top - 110;
    var co = $("#co").offset().top - 110;
    var safety = $('#safety').offset().top - 110;

	var temp = document.getElementById("mercury");

        $w.scroll(function() {
        	if($w.scrollTop() > project)
		        temp.style.height = '0px';
        	if($w.scrollTop() > overview)
		        temp.style.height = '25px';
            if($w.scrollTop() > mab)
                temp.style.height = '50px';
            if($w.scrollTop() > faq)
                temp.style.height = '100px';
            if($w.scrollTop() > CT)
                temp.style.height = '125px';
            if($w.scrollTop() > rt)
                temp.style.height = '150px';
            if($w.scrollTop() > hsps)
                temp.style.height = '175px';
            if($w.scrollTop() > QC)
                temp.style.height = '210px';
            if($w.scrollTop() > QS)
                temp.style.height = '235px';
            if($w.scrollTop() > Iv)
                temp.style.height = '285px';
            if($w.scrollTop() > PCD)
                temp.style.height = '350px';
            if($w.scrollTop() > parts)
                temp.style.height = '415px';
            if($w.scrollTop() > safety)
                temp.style.height = '430px';
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
            var CT = $("#CT").offset().top - 110;
            var QC = $("#QC").offset().top - 110;
            var parts = $("#parts").offset().top - 110;
            var co = $("#co").offset().top - 110;
            var safety = $('#safety').offset().top - 110;

            if($w.scrollTop() > safety) {
                scrollToElement('safety', 'normal', 115);
                return;
            }
            if($w.scrollTop() > co) {
                scrollToElement('co', 'normal', 115);
                return;
            }
            if($w.scrollTop() > parts) {
                scrollToElement('parts', 'normal', 115);
                return;
            }
            if($w.scrollTop() > QC) {
                scrollToElement('QC', 'normal', 115);
                return;
            }
            if($w.scrollTop() > CT) {
                scrollToElement('CT', 'normal', 115);
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
            var CT = $("#CT").offset().top - 110;
            var QC = $("#QC").offset().top - 110;
            var parts = $("#parts").offset().top - 110;
            var co = $("#co").offset().top - 110;
            var safety = $('#safety').offset().top - 110;

            if($w.scrollTop() < overview) {
                scrollToElement('overview', 'normal', 105);
                return;
            }
            if($w.scrollTop() < CT) {
                scrollToElement('CT', 'normal', 105);
                return;
            }
            if($w.scrollTop() < QC) {
                scrollToElement('QC', 'normal', 105);
                return;
            }
            if($w.scrollTop() < parts) {
                scrollToElement('parts', 'normal', 105);
                return;
            }
            if($w.scrollTop() < co) {
                scrollToElement('co', 'normal', 105);
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