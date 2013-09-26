(function() {
        var $w = $(window);
		var modeling = $("#modeling").offset().top;
        var overview = $('#overview').offset().top - 110;
		var Noise_in_the_cell = $("#Noise_in_the_cell").offset().top - 110;
        var Heat_Resistant_system = $('#Heat_Resistant_system').offset().top - 110;
        var des = $('#des').offset().top - 110;
        var si = $('#si').offset().top - 110;
        var fi = $('#fi').offset().top - 110;
        var Quorum_Control_system = $('#Quorum_Control_system').offset().top - 110;
        var qsd = $('#qsd').offset().top - 110;
        var rd = $('#rd').offset().top - 110;
        var pc = $('#pc').offset().top - 110;
		var temp = document.getElementById("mercury");

        $w.scroll(function() {
        	if($w.scrollTop() > modeling)
		        temp.style.height = '0px';
        	if($w.scrollTop() > overview)
		        temp.style.height = '25px';
        	if($w.scrollTop() > Noise_in_the_cell)
				temp.style.height = '50px';
            if($w.scrollTop() > Heat_Resistant_system)
                temp.style.height = '75px';
            if($w.scrollTop() > des)
                temp.style.height = '100px';
             if($w.scrollTop() > si)
                temp.style.height = '125px';
             if($w.scrollTop() > fi)
                temp.style.height = '150px';
             if($w.scrollTop() > Quorum_Control_system)
                temp.style.height = '175px';
             if($w.scrollTop() > qsd)
                temp.style.height = '200px';
             if($w.scrollTop() > rd)
                temp.style.height = '225px';
             if($w.scrollTop() > pc)
                temp.style.height = '250px';

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
            var modeling = $("#modeling").offset().top;
            var overview = $('#overview').offset().top - 110;
            var Noise_in_the_cell = $("#Noise_in_the_cell").offset().top - 110;
            var Heat_Resistant_system = $('#Heat_Resistant_system').offset().top - 110;
            var Quorum_Control_system = $('#Quorum_Control_system').offset().top - 110;

            if($w.scrollTop() > Quorum_Control_system) {
                scrollToElement('Quorum_Control_system', 'normal', 115);
                return;
            }
            if($w.scrollTop() > Heat_Resistant_system) {
                scrollToElement('Heat_Resistant_system', 'normal', 115);
                return;
            }
            if($w.scrollTop() > Noise_in_the_cell) {
                scrollToElement('Noise_in_the_cell', 'normal', 115);
                return;
            }
            if($w.scrollTop() > overview) {
                scrollToElement('overview', 'normal', 115);
                return;
            }
            if($w.scrollTop() > modeling) {
                scrollToElement('modeling', 'normal', 115);
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
            var modeling = $("#modeling").offset().top;
            var overview = $('#overview').offset().top - 110;
            var Noise_in_the_cell = $("#Noise_in_the_cell").offset().top - 110;
            var Heat_Resistant_system = $('#Heat_Resistant_system').offset().top - 110;
            var Quorum_Control_system = $('#Quorum_Control_system').offset().top - 110;

           
            if($w.scrollTop() < overview) {
                scrollToElement('overview', 'normal', 105);
                return;
            }
            if($w.scrollTop() < Noise_in_the_cell) {
                scrollToElement('Noise_in_the_cell', 'normal', 105);
                return;
            }
            if($w.scrollTop() < Heat_Resistant_system) {
                scrollToElement('Heat_Resistant_system', 'normal', 105);
                return;
            }
            if($w.scrollTop() < Quorum_Control_system) {
                scrollToElement('Quorum_Control_system', 'normal', 105);
                return;
            }       
            else {
                scrollToElement('footer', 'normal', 110);
                return;
            }   
         }