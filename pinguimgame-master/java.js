
    var MaxHeight, MaxWidth, YPos, XPos, interval1, interval2, interval3, interval4, moveTo;
	
	 var pingasPoints = 0;

function init(){
	YPos = 0;
	XPos = 0;
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
}

function move(){
	if ((YPos >= 198)||(XPos >= 254)||(YPos <= -591)||(XPos <= -796)) {
	    stop();
		}
	else if ((YPos<=-99)&&(YPos>=-105)&&(XPos>=40)&&(XPos<=45)) {
		alert('You found the treasure');
		toMove.style.background = "url('caixa-de-tesouro-25235691.jpg')";
        document.getElementById("points").innerHTML = pingasPoints = pingasPoints + 100;
		stop();
		}
	else if ((YPos<=-55)&&(YPos>=-60)&&(XPos>=10)&&(XPos<=15)) {
		alert('Pisou uma armadilha');
        document.getElementById("points").innerHTML = pingasPoints = pingasPoints-10;
		stop();
		}
	else if ((YPos<=-140)&&(YPos>=-150)&&(XPos>=-145)&&(XPos<=-120)) {
		alert('You are locked in the tower');
		toMove.style.background = "url('torre.jpg')";
        document.getElementById("points").innerHTML = pingasPoints = pingasPoints/2;
		stop();
		} else {
			
			toMove.style.background = "url('screen.png')";
		};
		
	toMove = document.getElementById("scroller");
	toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	document.getElementById("pos").innerHTML=toMove.style.backgroundPosition;
	document.getElementById("points").innerHTML = pingasPoints++;
};
function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('pingas').setAttribute('class',myclass[n]);
	YPos--;        
	move();

};
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('pingas').setAttribute('class',myclass[n]);
	YPos++;        
	move();
};
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('pingas').setAttribute('class',myclass[n]);
	XPos--;        
	move();
};
function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('pingas').setAttribute('class',myclass[n]);
	XPos++;        
	move();
};

function moveB() {
	stop(); 
	interval1 = setInterval(moveBx, 20);
};
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 20);
};
function moveD() {
	stop();	
	interval2 = setInterval(moveDir, 20);
};
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 20);
};
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
};
function reload() {
	window.location.reload(false);
};

function Key(e) {
    if (e.keyCode===37) moveE();
    if (e.keyCode===38) moveC();
    if (e.keyCode===39) moveD();
    if (e.keyCode===40) moveB();
	if (e.keyCode===32) stop();
}
window.onload =init;
