/**
 * 
 */
$(function() {
	 $('#slider').nivoSlider({pauseTime: 5000});
	 var speed=30//速度数值越大速度越慢
	var colee_left2=document.getElementById("colee_left2");
	var colee_left1=document.getElementById("colee_left1");
	var colee_left=document.getElementById("colee_left");
	colee_left2.innerHTML=colee_left1.innerHTML;
	function Marquee3(){
	if(colee_left2.offsetWidth-colee_left.scrollLeft<=0)//offsetWidth 是对象的可见宽度
	colee_left.scrollLeft-=colee_left1.offsetWidth;//scrollWidth 是对象的实际内容的宽，不包边线宽度
	else{
	colee_left.scrollLeft++;
	}
	}
	var MyMar3=setInterval(Marquee3,speed)
	colee_left.onmouseover=function() {clearInterval(MyMar3)}
	colee_left.onmouseout=function() {MyMar3=setInterval(Marquee3,speed)}
	//iFrameHeight();
});

function change_page(id){
	$("#iframepage").attr("src",id);
}
function back_page(id){
	$("#iframepage", parent.document).attr("src",id);
}
function js_menu(id){
	console.debug(id);
	var js_index=0;
	for(var i=1;i<=3;i++){
		var obj_menu=$("#menu_" + i);//window.document.getElementById("menu_" + i);
		var obj=$("#cc_menu_" + i);//window.document.getElementById("cc_menu_" + i);
		if(i==Number(id)){
			obj.css('display',''); 
			//obj.style.display="";
		}
		else{
			obj.css('display','none'); 
			// obj.style.display="none";
		}
	}
}

function iFrameHeight() {   
	var ifm= document.getElementById("iframepage");   
	var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument;   
	if(ifm != null && subWeb != null) {
	   ifm.height = subWeb.body.scrollHeight;
	   ifm.width = subWeb.body.scrollWidth;
	}   
}