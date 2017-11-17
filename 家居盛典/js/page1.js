 
function liuxing_animation(){
	$("#liuxing img").eq(0).css("top","41.7%").css("left","-26%");
	$("#liuxing img").eq(1).css("top","39.7%").css("right","-37%");
	$("#liuxing img").eq(2).css("top","27.7%").css("right","-37%");

	$("#liuxing img").eq(0).animate({
	top:"82.7%",
	left:"97%",
	},3000);
	$("#liuxing img").eq(1).animate({
		top:"1.7%",
		right:"101%",
	},3000);
	$("#liuxing img").eq(2).animate({
		top:"80.7%",
		right:"101%",
	},3000);  
} 
 
function box_animation(){
 	$("#box img").eq(2).animate({
			bottom:0,
	},2000);
	$("#box img").eq(3).animate({
		bottom:0,
	},2000);
	$("#box img").eq(1).animate({
		right:0,
	},2000);
	$("#box img").eq(0).animate({
		left:0,
	},2000);
	$("#box img").eq(4).animate({ 
		top:"20.376%"
	},2000);
	$("#box img").eq(5).animate({
		top:0,
	},2000);
	$("#box img").eq(6).animate({
		top:0,
	},2000);
	$("#box img").eq(7).animate({
		top:"35.266%",
	},2000);
	$("#box img").eq(8).animate({
		top:"39.34%",
	},2000);
	setTimeout(function(){
		//第十张图
		$("#box img").eq(9).animate({
			opacity:1,
		},2000);
		$("#box img").eq(10).animate({
			opacity:1,
		},2000);
		$("#box img").eq(11).animate({
			opacity:1,
		},2000);
		$("#box img").eq(12).animate({
			opacity:1,
		},2000);
	},2000);
	
	setTimeout(function(){ 
		$("#box img").eq(13).animate({
			opacity:1,
		},1000); 
	},3000);
}
 
function box2_animation(){ 
	setTimeout(function(){ 
		$("#box2 img").eq(2).animate({
			top:0,
			width:"75.56%",
			opacity:1, 
		},2000);
	},4000);
 	setTimeout(function(){ 
		$("#box2 img").eq(1).animate({
			top:0,
			width:"63%", 
			 right:0,
		},1000);
		$("#box2 img").eq(0).animate({
			top:"-11%",  
			opacity:1,
		},1000);
	},6000);
} 
 
function box3_animation(){ 
	$("#box3").eq(0).animate({
		bottom:"11%",
	},800); 
	$("#box3").eq(0).animate({
			bottom:"6%",
	},300); 
}
  
function box4_animation(){
	var a=0; 
	var  timeID1 = setInterval(function(){
		a+=0.5;  
		var rImg=document.getElementsByTagName("img")[1];
 		rImg.style.transform="rotateZ("+a+"deg)";  
	},1);  
	boFang(); 
	function boFang(){
	var flag = Boolean( $("#box4 audio").get(0).play()); 
	$("#box4 img").on("touchstart",function(){   
		if(flag){ 
			flag = Boolean($("#box4 audio").get(0).pause()); 
			$("#box4 img").get(0).src="img/music-off.png"; 
			//清除旋转定时器
			clearInterval(timeID1);
			console.log(flag);
		}
		else{ 
			flag = Boolean($("#box4 audio").get(0).play());
			$("#box4 img").get(0).src="img/music-on.png"; 
			//开启旋转
			box4_animation();
			console.log(flag); 
		} 
	}); 
} 
   
} 

