
//使用方法举例：

//div2.mouswheel(function(event,delta){
//	if(delta>0){//谷歌：上滚动
//		console.log("上滚动");
//	}
//	else{
//		console.log("下滚动");
//	}
//	console.log(delta);
//});




//绑到原型上
HTMLElement.prototype.mouswheel=function(callback){
	//浏览器
	var agent=userAgent();
	console.log(agent);
	if(agent=="Firefox"){
		this.addEventListener("DOMMouseScroll",wheel);
	}
	else{
		this.onmousewheel=wheel;
	}
	function wheel(ev){
		ev=ev||window.event;
		var delta=0;
		if(ev.detail){//火狐
			delta=ev.delta>0?-1:1; 
		}
		else{//谷歌
			//下：-120  上：120
			delta=ev.wheelDelta>0?1:-1;
		}
		//回调
		callback&&callback.call(this,ev,delta);
		ev.preventDefault(); 
	} 
}

function userAgent(){
	var browser=navigator.userAgent; 
	var isChrom=browser.search("Chrome");//找不到-1 
	if(isChrom!=-1)return "Chrome";
	
	var isFF = browser.indexOf("Firefox") > -1;
	if(isFF)return "Firefox";
	
	var isSafari = browser.indexOf("Safari") > -1;
	if(isSafari)return "Safari";
	
	var isOpera = browser.indexOf("Opera") > -1;
	if(isOpera)return "Opera";
	
	var isOpera = browser.indexOf("compatible") > -1 && browser.indexOf("MSIE") > -1;
	if(isOpera)return "IE";
}