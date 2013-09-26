(function() {
    var $w = $(window);
	var humanpractice = $("#humanpractice").offset().top;
	var Meaning = $("#Meaning").offset().top - 110;
    var C = $("#C").offset().top - 110;
    var tj = $("#tj").offset().top - 110;
    var pu = $("#pu").offset().top - 110;
    var tu = $("#tu").offset().top - 110;
    var mi = $("#mi").offset().top - 110;
    var pro = $("#pro").offset().top - 110;
    var en = $("#en").offset().top - 110;
    var un = $("#un").offset().top - 110;
    var hs = $("#hs").offset().top - 110;
    var ps = $("#ps").offset().top - 110;
    var k = $("#k").offset().top - 110;

	var temp = document.getElementById("mercury");

        $w.scroll(function() {
        	if($w.scrollTop() > humanpractice)
		        temp.style.height = '0px';
        	if($w.scrollTop() > Meaning)
		        temp.style.height = '75px';
            if($w.scrollTop() > C)
                temp.style.height = '100px';
            if($w.scrollTop() > tj)
                temp.style.height = '125px';
            if($w.scrollTop() > pu)
                temp.style.height = '150px';
            if($w.scrollTop() > tu)
                temp.style.height = '175px';
            if($w.scrollTop() > mi)
                temp.style.height = '225px';
            if($w.scrollTop() > pro)
                temp.style.height = '250px';
            if($w.scrollTop() > en)
                temp.style.height = '275px';
            if($w.scrollTop() > un)
                temp.style.height = '300px';
            if($w.scrollTop() > hs)
                temp.style.height = '325px';
            if($w.scrollTop() > k)
                temp.style.height = '350px';
            
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
            var humanpractice = $("#humanpractice").offset().top;
            var Meaning = $("#Meaning").offset().top - 110;
            var C = $("#C").offset().top - 110;
            var pro = $("#pro").offset().top - 110;

            if($w.scrollTop() > pro) {
                scrollToElement('pro', 'normal', 115);
                return;
            }
            if($w.scrollTop() > C) {
                scrollToElement('C', 'normal', 115);
                return;
            }
            if($w.scrollTop() > Meaning) {
                scrollToElement('Meaning', 'normal', 115);
                return;
            }
            if($w.scrollTop() > humanpractice) {
                scrollToElement('humanpractice', 'normal', 115);
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
            var humanpractice = $("#humanpractice").offset().top;
            var Meaning = $("#Meaning").offset().top - 110;
            var C = $("#C").offset().top - 110;
            var pro = $("#pro").offset().top - 110;

           
            if($w.scrollTop() < Meaning) {
                scrollToElement('Meaning', 'normal', 105);
                return;
            }
            if($w.scrollTop() < C) {
                scrollToElement('C', 'normal', 105);
                return;
            }
            if($w.scrollTop() < pro) {
                scrollToElement('pro', 'normal', 105);
                return;
            }   
            else {
                scrollToElement('footer', 'normal', 110);
                return;
            }   
         }