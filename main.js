var mouseevent= "empty";
var lastpositionx, lastpositiony;
canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color="blue";
widthline=2;
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    color=document.getElementById("color").value ;
    widthline=document.getElementById("widthline").value ;
    mouseevent="mouseDown";
}
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
    positionMouseX= e.clientX - canvas.offsetLeft;
    positionMouseY= e.clientY - canvas.offsetTop;
    if(mouseevent="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthline;
        ctx.moveTo(lastpositionx,lastpositiony);
        ctx.lineTo(lastpositionx,lastpositiony);
        ctx.stroke();
    }
    lastpositionx=positionMouseX;
    lastpositiony=positionMouseY;
}
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouseevent="";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(){
    mouseevent="";
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}