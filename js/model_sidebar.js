(function() {
        var $w = $(window);
		var modeling = $("#modeling").offset().top;
        var overview = $('#overview').offset().top - 110;
		var SimulationResults = $("#SimulationResults").offset().top - 110;
        var GRNSimulation = $('#GRNSimulation').offset().top - 110;
        var ODEmodel = $('#ODEmodel').offset().top - 110;
		var temp = document.getElementById("mercury");

        $w.scroll(function() {
        	if($w.scrollTop() > modeling)
		        temp.style.height = '0px';
        	if($w.scrollTop() > overview)
		        temp.style.height = '25px';
        	if($w.scrollTop() > SimulationResults)
				temp.style.height = '50px';
            if($w.scrollTop() > GRNSimulation)
                temp.style.height = '75px';
            if($w.scrollTop() > ODEmodel)
                temp.style.height = '100px';
        });

})();

function flipup(){
            var $w = $(window);
            var modeling = $("#modeling").offset().top;
            var overview = $('#overview').offset().top - 110;
            var SimulationResults = $("#SimulationResults").offset().top - 110;
            var GRNSimulation = $('#GRNSimulation').offset().top - 110;


            if($w.scrollTop() > GRNSimulation) {
                scrollToElement('GRNSimulation', 'normal', 115);
                return;
            }
            if($w.scrollTop() > SimulationResults) {
                scrollToElement('SimulationResults', 'normal', 115);
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
            var modeling = $("#modeling").offset().top;
            var overview = $("#overview").offset().top - 110;
            var SimulationResults = $('#SimulationResults').offset().top - 110;
            var GRNSimulation = $('#GRNSimulation').offset().top - 110;
            var ODEmodel = $('#ODEmodel').offset().top - 110;

            if($w.scrollTop() < overview) {
                scrollToElement('overview', 'normal', 105);
                return;
            }
            if($w.scrollTop() < SimulationResults) {
                scrollToElement('SimulationResults', 'normal', 105);
                return;
            }
            if($w.scrollTop() < GRNSimulation) {
                scrollToElement('GRNSimulation', 'normal', 105);
                return;
            }
            if($w.scrollTop() < ODEmodel) {
                scrollToElement('ODEmodel', 'normal', 105);
                return;
            }       
            else {
                scrollToElement('footer', 'normal', 110);
                return;
            }   
         }