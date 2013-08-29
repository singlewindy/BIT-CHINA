        function temper(n, des){
         var temp = document.getElementById("mercury");
         var height = 25 * n;
         temp.style.height = height + 'px';

         var scroll_offset = $(des).offset();  //得到pos这个div层的offset，包含两个值，top和left
         scroll_offset.top = scroll_offset.top - 110;
         $("body,html").animate({
            scrollTop:scroll_offset.top  //让body的scrollTop等于pos的top，就实现了滚动
         },1000);
        }

        function getElementsByClassName(node,classname) {
          if (node.getElementsByClassName) { // use native implementation if available
            return node.getElementsByClassName(classname);
          } else {
            return (function getElementsByClass(searchClass,node) {
                if ( node == null )
                  node = document;
                var classElements = [],
                    els = node.getElementsByTagName("*"),
                    elsLen = els.length,
                    pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"), i, j;

                for (i = 0, j = 0; i < elsLen; i++) {
                  if ( pattern.test(els[i].className) ) {
                      classElements[j] = els[i];
                      j++;
                  }
                }
                return classElements;
            })(classname, node);
          }
        }

        function fold(){
         var sidebar = document.getElementById("sidebar");
         var leftarrow = document.getElementById("leftarrow");
         var rightarrow = document.getElementById("rightarrow");
         var section = getElementsByClassName(document, "section");
         var widget = document.getElementById("widget");
         n = section.length;        
         sidebar.style.left = '-300px';
         leftarrow.style.visibility = 'hidden';
         rightarrow.style.opacity = 0;
         rightarrow.style.visibility = 'visible';
         rightarrow.style.opacity = 1;
         widget.style.visibility = 'visible';
         widget.style.opacity = 1;
         for (var i = 0; i < n; i++) {
            var e = section[i];
            e.style.marginLeft = '0px';
         }
        }

        function unfold(){
         var sidebar = document.getElementById("sidebar");
         var leftarrow = document.getElementById("leftarrow");
         var rightarrow = document.getElementById("rightarrow");
         var section = getElementsByClassName(document, "section");
         var widget = document.getElementById("widget");
         n = section.length;         
         sidebar.style.left = '0px';
         leftarrow.style.visibility = 'visible';
         leftarrow.style.opacity = 1;
         rightarrow.style.visibility = 'hidden';
         rightarrow.style.opacity = 0;
         widget.style.visibility = 'hidden';
         widget.style.opacity = 0;
         for (var i = 0; i < n; i++) {
            var e = section[i];
            e.style.marginLeft = '300px';
         }
        }

         function scrollToElement(id, speed, num){
            $('html,body').animate({scrollTop: $("#"+id).offset().top - num}, speed, function() {
          });
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