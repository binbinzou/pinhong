/**
 * 
 */
$(function() {
	var initPagination = function() {
		var num_entries = $("#hiddenresult div.result").length;
		// 创建分页
		$("#Pagination").pagination(num_entries, {
			num_edge_entries: 1, //边缘页数
			num_display_entries: 4, //主体页数
			callback: pageselectCallback,
			items_per_page:1 ,//每页显示1项
			prev_text: "前一页",
			next_text: "后一页"
		});
	 }();
	 
	function pageselectCallback(page_index, jq){
		var new_content = $("#hiddenresult div.result:eq("+page_index+")").clone();
		$("#Searchresult").empty().append(new_content); //装载对应分页的内容
		return false;
	}
});
function iFrameHeight() {   
	var ifm= window.parent.document.getElementById("iframepage");   
	var subWeb = window.parent.document.frames ? window.parent.document.frames["iframepage"].document : ifm.contentDocument;   
	if(ifm != null && subWeb != null) {
		console.debug(subWeb.getElementById("main"));
	   ifm.height = subWeb.getElementById("main").offsetHeight;
	   ifm.width = subWeb.getElementById("main").offsetWidth;
	}   
}