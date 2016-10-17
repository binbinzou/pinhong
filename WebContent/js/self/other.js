function change_page(id){
	for(var i=1;i<7;i++){
		$("#tab"+i,parent.document).css("color","#000");
	}
	$("#tab3",parent.document).css("color","#00A2E6");
	$("#iframepage",parent.document).attr("src",id);
}
function back_page(id){
	$("#iframepage", parent.document).attr("src",id);
	for(var i=1;i<7;i++){
		$("#tab"+i,parent.document).css("color","#000");
	}
	$("#tab1",parent.document).css("color","#00A2E6");
	$("body",parent.document).scrollIntoView();
}
