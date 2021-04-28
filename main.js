canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var cx;
    var cy;
    var lx;
    var ly;
    var ltx;
    var lty;
    var cxt;
    var cyt;
    
    var mouseEvent = "";
    var color = "blue"
    var width = 2;


    canvas.addEventListener("mousedown", mymousedown);

    function mymousedown() {
        color = document.getElementById("color").value
        width = document.getElementById("width").value
 
        mouseEvent = "mouseDown"
    }

    canvas.addEventListener("mouseup", mymouseup);

    function mymouseup() {
        mouseEvent = "mouseUP"
    }

    canvas.addEventListener("mouseleave", mymouseleave);

    function mymouseleave() {
        mouseEvent = "mouseleave"
    }
    
    canvas.addEventListener("mousemove", mymousemove);

    function mymousemove(e) {
        cx = e.clientX - canvas.offsetLeft;
        cy = e.clientY - canvas.offsetTop;

        if (mouseEvent = "mouseDown") {
            ctx.beginPath()
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.moveTo(lx,ly)
            ctx.lineTo(cx,cy)
            ctx.stroke()

        }

        lx = cx;
        ly = cy;
        
        
    }

    function clearArea() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }

    canvas.addEventListener("touchstart", mytouchstart)

    function mytouchstart(e) {
        color = document.getElementById("color").value
        width = document.getElementById("width").value
        ltx = e.touches[0].clientX - canvas.offsetLeft
        lty = e.touches[0].clientY - canvas.offsetTop
    }
  
    canvas.addEventListener("touchmove", mytouchmove)

    function mytouchmove(e) {
        cxt = e.touches[0].clientX - canvas.offsetLeft;
        cyt = e.touches[0].clientY - canvas.offsetTop;
        
            ctx.beginPath()
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.moveTo(ltx,lty)
            ctx.lineTo(cxt,cyt)
            ctx.stroke()

            ltx = cxt

            lty = cyt
        
    }




    
    