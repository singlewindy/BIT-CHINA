$(document).ready(
            function(){
                $("ul.subnav").parent().find("> a").append("<span> ▼</span>");
                $("ul.topnav li").hover(
                    function() {
                        // Hover over
                        $(this).parent().find("ul.subnav").hide();
                        $(this).find("ul.subnav").show();
                        // Hover out
                        $(this).hover(
                            function() {
                            },
                            function(){
                                $(this).find("ul.subnav").hide();
                            }
                        );
                    },
                    function(){
                        $(this).find("ul.subnav").hide();
                    }

                );
            }
        );