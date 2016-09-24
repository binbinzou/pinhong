/**
 * 
 */
$(function() {
	 $('#slider').nivoSlider({pauseTime: 5000,controlNav:false});
	iFrameHeight();
});

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
function change_page(id){
	$("#iframepage").attr("src",id);
	document.getElementById('body').scrollIntoView();
}
function back_page(id){
	$("#iframepage", parent.document).attr("src",id);
}
function returnFalse(){
	return false;s
}
$(document).bind("contextmenu",function(e){
    if (!jQuery_isTagName(e, ['div', 'TEXTAREA'])) {
        e.preventDefault();
        return false;
    }
    return true;
});