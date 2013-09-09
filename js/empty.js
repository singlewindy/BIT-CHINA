(function() {
        var $w = $(window);
        var $nav = $("#navigation");
        var $emp = $('#empty');
        var $sid = $('#sidebar');

        $w.scroll(function() {
            $nav[$w.scrollTop() > 106 ? "addClass" : "removeClass"]("fixed");
            $emp[$w.scrollTop() > 106 ? "addClass" : "removeClass"]("fixed");
            $sid[$w.scrollTop() > 106 ? "addClass" : "removeClass"]("fixed");
            
        });

})();