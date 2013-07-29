$(function(){

    var $el, leftPos, newWidth,
        $mainNav = $("#header #hlinks");
    
    $mainNav.append("<div id='magic-line'></div>");
    
    var $magicLine = $("#header #hlinks #magic-line");
    
    $magicLine
        .width($("#header #hlinks a.hlink").width())
        .css("left", $("#header #hlinks a.hlink").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("#header #hlinks").find("a.hlink").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.width();
        
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
    
});