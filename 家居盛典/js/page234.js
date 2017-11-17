function diqiu() {
	var index = 1;
	var currentSrc = $("#sec2 img").get(0).src
	sub = currentSrc.slice(0, -5); //图片地址前缀 
	setInterval(function() {
		index++;
		if(index > 47) index = 1;
		$("#sec2 img").get(0).src = sub + index + ".jpg";
	}, 100);
}

function shake() {
	$("#sec3 img").css({
		transform: "rotateZ(30deg)",
		transitionDuration: "5s",
	});
	setTimeout(function() {
		$("#sec3 img").css({
			transitionDuration: "5s",
			transform: "rotateZ(-30deg)",
		});
	}, 5000);
}

function shanshuo() {
	setInterval(function() {
		$("#sec4 img").eq(3).css({
			opacity: 0,
			transitionDuration: "0.9s",
		});
		setTimeout(function() {
			$("#sec4 img").eq(3).css({
				opacity: 1,
				transitionDuration: "0.1s",
			});
		}, 600)

	}, 1000);
}




function clickImg(){
	var currentObj=null;//当前显示的对象
 	var currentIndex=null;//当前对象的下标
 	
	$("#touxiang img").on("touchstart",function(){
		currentObj=$(this);//当前对象
		currentIndex = currentObj.index(); //当前下标
		
		$("#show #left").get(0).style.display = "block";
		$("#sec4 #show #right").get(0).style.display = "block"; 
		$("#show #close").get(0).style.display = "block";
		$("#show #ch").attr("src",$(this).attr("big"));
		//点击左箭头
		$("#show #left").on("touchstart",function(){ 
			//记录前一个对象
			currentObj=$("#touxiang img").eq(currentIndex-1); 
			//当前下标是0时，前一个对象
			if(currentIndex===0)currentObj=$("#touxiang img").eq(7);  
			//修改src
			$("#show #ch").attr("src",currentObj.attr("big")); 
			//记录当前对象下标
			currentIndex = currentObj.index(); 
		}); 
		//点击右箭头
		$("#sec4 #show #right").on("touchstart",function(){  
			//记录下一个对象
			currentObj=$("#touxiang img").eq(currentIndex+1); 
			//当前下标是0时，前一个对象
			if(currentIndex===7)currentObj=$("#touxiang img").eq(0);  
			//修改src
			$("#show #ch").attr("src",currentObj.attr("big")); 
			//记录当前对象下标
			currentIndex = currentObj.index(); 
		}); 
		//点击关闭
		$("#show #close").on("touchstart",function(){
			$("#show #ch").attr("src","");
			this.style.display = "none";
			$("#sec4 #show #right").get(0).style.display = "none"; 
			$("#show #close").get(0).style.display = "none";
		});
	});
}
		 	

function txAnimate(){
	$("#sec4 #txshow").on("touchstart",function(){ 
		$("#sec4 #touxiang img").each(function(){
			this.style.display="block";
		});
		$("#sec4 #touxiang img").eq(0).animate({
			top: "8%",
			left: "10%",
		},1000);
		$("#sec4 #touxiang img").eq(1).animate({
			top: "15%",
			left: "58%",
		},1000);
		$("#sec4 #touxiang img").eq(2).animate({
			top: "35%",
			left: "62%",
		},1000);
		$("#sec4 #touxiang img").eq(3).animate({
			top: "65%",
			left: "67%",
		},1000);
		$("#sec4 #touxiang img").eq(4).animate({
			top: "75%",
			left: "-2%",
		},1000);
		$("#sec4 #touxiang img").eq(5).animate({
			top: "27%",
			left: "-3%",
		},1000);
		$("#sec4 #touxiang img").eq(6).animate({
			top: "50%",
			left: "6%",
		},1000);
		$("#sec4 #touxiang img").eq(7).animate({
			top: "57%",
			left: "31%",
		},1000); 
	});
}