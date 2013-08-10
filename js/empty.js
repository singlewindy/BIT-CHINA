(function() {
        var $w = $(window);
        var $nav = $("#navigation");
        var $emp = $('#empty');
        

        $w.scroll(function() {
            $nav[$w.scrollTop() > 106 ? "addClass" : "removeClass"]("fixed");
            $emp[$w.scrollTop() > 106 ? "addClass" : "removeClass"]("fixed");
        });


})();