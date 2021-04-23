var bevent="empty";
var lx,ly;
var canvas=document.getElementById("mc");
var ctx=canvas.getContext("2d");
var wid=5;

var color="black";
var colour="white";
var width=screen.width;
var nw=screen.width-70;
var nh=screen.width-300;

document.getElementById("lw").value=3;

canvas.addEventListener("mousedown",mousedown);

function mousedown(e) {
   bevent="mouseDown";
   color=document.getElementById("co").value;
   wid=document.getElementById("lw").value;
   radius=document.getElementById("ra").value;
}

canvas.addEventListener("mouseup",mouseup);

function mouseup(e) {
   bevent="mouseUP";
   color=document.getElementById("co").value;
   wid=document.getElementById("lw").value;
   radius=document.getElementById("ra").value;
}

canvas.addEventListener("mouseleave",mouseleave);

function mouseleave(e) {
   bevent="mouseleave";
}

canvas.addEventListener("mousemove",mousemove);

function mousemove(e) {
     cx = e.clientX-canvas.offsetLeft;
    cy = e.clientY-canvas.offsetTop;
      if (bevent=="mouseDown") {
        
        
        ctx.beginPath();
        ctx.lineWidth=wid;
        ctx.strokeStyle=color;
        ctx.moveTo(lx,ly);
       ctx.lineTo(cx,cy);
       ctx.stroke();
}
    ly=cy;
    lx=cx;
}

if (width<992) {
    document.getElementById("mc").width=nw;
    document.getElementById("mc").height=nh;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",start);

function start(e) {
    lx=e.touches[0].clientX-canvas.offsetLeft;
    ly=e.touches[0].clientY-canvas.offsetTop;
    color=document.getElementById("co").value;
    wid=document.getElementById("lw").value;
}

canvas.addEventListener("touchmove",move);

function move(e) {
    cx=e.touches[0].clientX-canvas.offsetLeft;
    cy=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.lineWidth=wid;
    ctx.strokeStyle=color;
    ctx.moveTo(lx,ly);
    ctx.lineTo(cx,cy);
    ctx.stroke();

    ly=cy;
    lx=cx;
}

