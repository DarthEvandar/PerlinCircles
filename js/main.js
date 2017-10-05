t=0;
h=200;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
noise.seed(Math.random());
var id = ctx.createImageData(1,1); // only do this once per page
var d  = id.data;  
function animate(){


/*  ctx.fillStyle = 'rgb(255,255,255)';
ctx.fillRect(0,0,canvas.width, canvas.height);*/
ctx.fillStyle = 'rgb(0,0,255)';
ctx.fillRect((canvas.width/2)-h,(canvas.height/2)-h,2*h,2*  h);

t+=.01;
for (var x = (canvas.width/2)-h; x < (canvas.width/2)+h; x++) {
	for (var y = (canvas.height/2)-h; y < (canvas.height/2)+h; y++) {
		var value = noise.simplex3(x / 100, y / 100,t);
		var r;
		var g;
		var b;
      //console.log(value);
      if(value<.3){
      	//ctx.strokeStyle  = "rgb(0,0,255)";
      	r = 0;
      	g = 0;
      	b = 255;
      }
      else if(value<.4){
      	//ctx.strokeStyle = "rgb(255,255,0)"
      	r = 255;
      	g = 255;
      	b = 0;
      }else if(value<.7){
      	//ctx.strokeStyle = "rgb(0,255,0)";	
      	r = 0;
      	g = 255;
      	b = 0;
      }else if(value<.9){
      	//ctx.strokeStyle = "rgb(0,150,0)";
      	r = 0;
      	g = 150;
      	b = 0;
      }else{
      	//ctx.strokeStyle = "rgb(175,175,175)"
      	r = 175;
      	g = 175;
      	b = 175;
      }
      d[0]   = r;
      d[1]   = g;
      d[2]   = b;
      d[3]   = 255;
      ctx.putImageData( id, x, y ); 
    	/*ctx.beginPath();
    	ctx.arc(x,y,Math.abs(value)*3,0,Math.PI*2);
    	ctx.stroke();*/
    }
}

    /*t+=.001;
    for (var x = (canvas.width/2)-h; x < (canvas.width/2)+h; x++) {
      for (var y = (canvas.height/2)-h; y < (canvas.height/2)+h; y++) {
        var value = noise.simplex2(x / 100, y / 100);
        if(value<.2){
        ctx.strokeStyle  = "rgb(0,0,255)";
        
      }
      else if(value<.3){
        ctx.strokeStyle = "rgb(255,255,0)"
      }else if(value<.6){
        ctx.strokeStyle = "rgb(0,255,0)"
      }else if(value<.8){
        ctx.strokeStyle = "rgb(0,127,0)";
      }else{
        ctx.strokeStyle = "rgb(127,127,127)"
      }
        ctx.beginPath();
        ctx.arc(x,y,Math.abs(value)*5*t,0,Math.PI*2);
        ctx.stroke();
       }
   }*/
	/*ctx.fillRect(0,0,canvas.width,canvas.height);
  t+=0.01;
  for (var x = 0; x < canvas.width; x+=canvas.width/h) {
  		for (var y = 0; y < canvas.height; y+=canvas.width/h) {
       ctx.lineWidth = 4;

       ctx.beginPath();
    	 var value = Math.abs(noise.simplex3(x / 100, y / 100,t));
    	 if(value<.2){
        ctx.strokeStyle  = "rgb(0,0,255)";
        
      }
      else if(value<.3){
        ctx.strokeStyle = "rgb(255,255,0)"
      
      }else if(value<.7){
        ctx.strokeStyle = "rgb(0,255,0)";
      }else{
      	ctx.strokeStyle = "rgb(0,150,0)";
      }
    	 ctx.arc(x,y,Math.abs(value)*10,0,Math.PI*2);
    	 ctx.stroke();
  		}
  	}*/
  //ctx.fillRect(0,0,canvas.width,canvas.height);
 /* t+=0.1;
  for (var x = 0; x < 400; x++) {
  		for (var y = 0; y < 400; y++) {
		var r;
		var g;
		var b;
		var value = noise.simplex3(x / 100, y / 100,t);
		if(value<.3){
      	//ctx.strokeStyle  = "rgb(0,0,255)";
      	r = 0;
      	g = 0;
      	b = 255;
      }
      else if(value<.4){
      	//ctx.strokeStyle = "rgb(255,255,0)"
      	r = 255;
      	g = 255;
      	b = 0;
      }else if(value<.7){
      	//ctx.strokeStyle = "rgb(0,255,0)";	
      	r = 0;
      	g = 255;
      	b = 0;
      }else if(value<.9){
      	//ctx.strokeStyle = "rgb(0,150,0)";
      	r = 0;
      	g = 150;
      	b = 0;
      }else{
      	//ctx.strokeStyle = "rgb(175,175,175)"
      	r = 175;
      	g = 175;
      	b = 175;
      }
      d[0]   = r;
      d[1]   = g;
      d[2]   = b;
      d[3]   = 255;
      ctx.putImageData( id, x, y ); 
  		}
  	}*/
  /*t+=0.1;
  for (var x = 0; x < canvas.width; x++) {
      for (var y = 0; y < canvas.height; y++) {
      ctx.beginPath();
      var value = noise.simplex2(x / 100, y / 100);
      ctx.arc(x,y,Math.abs(value)*5,0,Math.PI*2);
      ctx.stroke();
      }
  }*/
  /*if(t>2){
    end();
    return;
  }
  encoder.addFrame(ctx);*/
  requestAnimationFrame(animate);
}
function end(){
	encoder.finish();
	encoder.download("download.gif");
}
/*var encoder = new GIFEncoder();
encoder.setRepeat(0);
encoder.setDelay(1);
encoder.start();*/
animate();