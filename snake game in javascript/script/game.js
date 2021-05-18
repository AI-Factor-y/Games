var canvas=document.getElementById("snake_canvas");

var game=canvas.getContext("2d");

// global elements
canvas.width=1520;
canvas.height=720;
game_width=76;
game_height=36;
// game matrix
var matrix=[];

//global food position
var food_x_cord=Math.floor(Math.random()*(game_height-4));
var food_y_cord=Math.floor(Math.random()*(game_width-4));
var food=[food_x_cord,food_y_cord];
function init_matrix(){

	matrix=[];
	for(var i=0;i<game_width;i++)
	{
		matrix.push([]);
	}

	for(var i=0;i<game_width;i++){
		for(var j=0;j<game_height;j++){
			matrix[i].push(0);
		}
	}
}

init_matrix();

function show_matrix(){

	for(var i=0;i<game_width;i++)
		console.log(matrix[i]);

}

class snake{

	constructor(){
		this.snake_body=[];
		this.init_snake();
		this.put_snake();
		this.direction = 8;

	}

	init_snake(){
		// this.snake_body=[];
		this.snake_body.push([game_width/2,game_height/2]);
		this.snake_body.push([game_width/2,1+game_height/2]);
		this.snake_body.push([game_width/2,2+game_height/2]);
	}

	put_snake(){

		for(var i=0;i<this.snake_body.length;i++){
			matrix[this.snake_body[i][1]][this.snake_body[i][0]]=1;

		}
	}

	move_right(){
		this.snake_body.reverse();
		var last=this.snake_body.length-1;
		if((this.snake_body[last][0]-1)<0)
			{clearInterval(x);}
		else{
			var newpos=[this.snake_body[last][0]-1,this.snake_body[last][1]];
			// newpos.reverse();
			for(var k=0;k<this.snake_body.length;k++){
				if(this.snake_body[k][0]==newpos[0]){
					if(this.snake_body[k][1]==newpos[1]){
						console.log('hit');
						clearInterval(x);
					}
				}
			}
			this.snake_body.push([this.snake_body[last][0]-1,this.snake_body[last][1]]);}
			this.snake_body.reverse();
			if(!((newpos[0]==food[1])&&(newpos[1]==food[0]))){
				var poped=this.snake_body.pop();

				matrix[poped[1]][poped[0]]=0;}
				else{
					console.log("food");
					food_x_cord=Math.floor(Math.random()*(game_height-4));
					food_y_cord=Math.floor(Math.random()*(game_width-4));
					food=[food_x_cord,food_y_cord];
				}
			}

			move_left(){
				this.snake_body.reverse();
				var last=this.snake_body.length-1;
				if((this.snake_body[last][0]+1)>=game_width)
					{clearInterval(x);}
				else{
					var newpos=[this.snake_body[last][0]+1,this.snake_body[last][1]];
			// newpos.reverse();
			for(var k=0;k<this.snake_body.length;k++){
				if(this.snake_body[k][0]==newpos[0]){
					if(this.snake_body[k][1]==newpos[1]){
						console.log('hit');
						clearInterval(x);
					}
				}
			}
			this.snake_body.push([this.snake_body[last][0]+1,this.snake_body[last][1]]);}
			this.snake_body.reverse();
			if(!((newpos[0]==food[1])&&(newpos[1]==food[0]))){
				var poped=this.snake_body.pop();
				matrix[poped[1]][poped[0]]=0;}
				else{
					console.log("food");
					food_x_cord=Math.floor(Math.random()*(game_height-4));
					food_y_cord=Math.floor(Math.random()*(game_width-4));
					food=[food_x_cord,food_y_cord];
				}

			}

			move_up(){
				this.snake_body.reverse();
				var last=this.snake_body.length-1;
				if((this.snake_body[last][1]-1)<0)
					{clearInterval(x);}
				else{
					var newpos=[this.snake_body[last][0],this.snake_body[last][1]-1];
					for(var k=0;k<this.snake_body.length;k++){
						if(this.snake_body[k][0]==newpos[0]){
							if(this.snake_body[k][1]==newpos[1]){
								console.log('hit');
								clearInterval(x);
							}
						}
					}

					this.snake_body.push([this.snake_body[last][0],this.snake_body[last][1]-1]);}
					this.snake_body.reverse();

					if(!((newpos[0]==food[1])&&(newpos[1]==food[0])))
					{

						var poped=this.snake_body.pop();
		// console.log(poped);
		matrix[poped[1]][poped[0]]=0;}
		else{
			while(true){
			console.log("food");
			food_x_cord=Math.floor(Math.random()*(game_height-4));
			food_y_cord=Math.floor(Math.random()*(game_width-4));
			food=[food_x_cord,food_y_cord];
			var endit=true;
			for(var s=0;s<this.snake_body.length;s++){
				if(food_x_cord==snake_body[1] && food_x_cord==snake_body[1]){
					endit=false;
				}
			}
			if(endit){
				break;
			}
		}
		}
	}

	move_down(){
		this.snake_body.reverse();
		var last=this.snake_body.length-1;
		if((this.snake_body[last][1]+1)>=game_height)
			{clearInterval(x);}
		else{
			var newpos=[this.snake_body[last][0],this.snake_body[last][1]+1];
			// newpos.reverse();
			for(var k=0;k<this.snake_body.length;k++){
				if(this.snake_body[k][0]==newpos[0]){
					if(this.snake_body[k][1]==newpos[1]){
						console.log('hit');
						clearInterval(x);
					}
				}
			}

			this.snake_body.push([this.snake_body[last][0],this.snake_body[last][1]+1]);}
			this.snake_body.reverse();
			if(!((newpos[0]==food[1])&&(newpos[1]==food[0]))){

				var poped=this.snake_body.pop();
				matrix[poped[1]][poped[0]]=0;}
				else{
					console.log("food");
					food_x_cord=Math.floor(Math.random()*(game_height-4));
					food_y_cord=Math.floor(Math.random()*(game_width-4));
					food=[food_x_cord,food_y_cord];
				}
			}


			display_snake(){
				game.clearRect(0,0,canvas.width,canvas.height);
				matrix[food[0]][food[1]]=2;
				for(var i=0;i<game_width;i++)
				{
					for(var j=0;j<game_height;j++){
						if(matrix[j][i]==1){

							game.fillStyle="#2aeb2a";
							game.fillRect(i*20,j*20,20,20);
						}
						if(matrix[j][i]==2){
							game.fillStyle= "rgba(255,0,0)" ;
							game.fillRect(i*20,j*20,20,20);
						}
					}
				}


			}

			move_snake(){


				if(this.direction ==8){
					this.move_up();
				}
				if(this.direction ==2){
					this.move_down();
				}
				if(this.direction ==4){
					this.move_right();
				}
				if(this.direction ==6){
					this.move_left();
				}
	// this.snake_body.reverse();
	// console.log(this.snake_body[0][1]);
	
	// this.snake_body.reverse();
	this.put_snake();
	this.display_snake();

}



}

s=new snake();


onkeydown=function(event){
	if(event.key=="ArrowUp")
		s.direction=8;
	if(event.key=="ArrowDown")
		s.direction=2;
	if(event.key=="ArrowLeft")
		s.direction=4;
	if(event.key=="ArrowRight")
		s.direction=6;
}


var x=setInterval("s.move_snake()",60);

// console.log(s.snake_body);

