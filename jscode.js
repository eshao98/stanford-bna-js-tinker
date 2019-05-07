      
      var link = document.getElementById("link"),
          img = document.getElementById("img");

      var hover_img=document.getElementById("img");
      document.addEventListener("mousemove", getMouse);

      var img_pos={x:0, y:0};

      setInterval(followMouse, 10);

      var mouse={x:0, y:0};

      function getMouse(e){
      	mouse.x = e.pageX;
      	mouse.y = e.pageY;
      }

      function followMouse(){
      	var distX = mouse.x - img_pos.x;
      	var distY = mouse.y - img_pos.y;

      	img_pos.x+=distX/10;
      	img_pos.y+=distY/10;

      	hover_img.style.left = img_pos.x + 100 + "px";
      	hover_img.style.top = img_pos.y + 100 + "px";

      	hover_image.setAttribute("class", "move")
      }

      link.onmouseover = function(){
        img.style.display = "block";
      }

      link.onmouseout = function(){
        img.style.display = "none";
      }