t=0;
h=75;

noise.seed(Math.random());
function animate(){
	var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
/*  ctx.fillStyle = 'rgb(255,255,255)';
ctx.fillRect(0,0,canvas.width, canvas.height);*/
      ctx.fillStyle = 'rgb(0,0,255)';
      ctx.fillRect((canvas.width/2)-h,(canvas.height/2)-h,2*h,2*  h);
	
  t+=.01;
  for (var x = (canvas.width/2)-h; x < (canvas.width/2)+h; x++) {
  	for (var y = (canvas.height/2)-h; y < (canvas.height/2)+h; y++) {
    	var value = Math.abs(noise.simplex3(x / 100, y / 100,t));
      
      //console.log(value);
      if(value<.2){
        ctx.strokeStyle  = "rgb(0,0,255)";
        
      }
      else if(value<.3){
        ctx.strokeStyle = "rgb(255,255,0)"
      
      }else{
        ctx.strokeStyle = "rgb(0,255,0)";
      }
    	ctx.beginPath();
    	ctx.arc(x,y,Math.abs(value)*3,0,Math.PI*2);
    	ctx.stroke();
  	 }
  }

    /*t+=.05;
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
        ctx.arc(x,y,Math.abs(value)*8*t,0,Math.PI*2);
        ctx.stroke();
       }
    }*/

	
  /*t+=0.01;
  for (var x = 0; x < canvas.width; x+=canvas.width/h) {
  		for (var y = 0; y < canvas.height; y+=canvas.width/h) {
       ctx.lineWidth = 4;
       ctx.beginPath();
    	 var value = noise.simplex3(x / 100, y / 100,t);
    	 ctx.arc(x,y,Math.abs(value)*10,0,Math.PI*2);
    	 ctx.stroke();
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