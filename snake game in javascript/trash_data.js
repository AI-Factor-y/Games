var posx=10;
var posy=10;
var w=50;
var h=50;
var velx=1;
var vely=1;

game.fillStyle="#2aeb2a";

// game.fillRect(posx,posy,w,h);

function move_rect(){
	posx+=velx;
	posy+=vely;
	// console.log(2);
	game.clearRect(0,0,canvas.width,canvas.height);
	game.fillStyle="#2aeb2a";
	game.fillRect(posx,posy,w,h);
	if(posx>=400 || posx<=0){
		velx*=-2;	}
	if(posy>=400 ||posy<=0){
		vely*=-1;
	}

}

// for(var i=0;i<400;i++){

	
// 	// console.log(i);
	
	
	
// 	setTimeout("move_rect()",100);
	
// }

var id=setInterval("move_rect()",2);