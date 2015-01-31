$(function() {
	//alert('test');
	//$("#menu").mouseover
	function test(){
		alert($("#m1").text());
	}
	$("#m1").mouseover(function() {
  		$( this ).text( "首頁" );
	});
	$("#m2").mouseover(function() {
  		$( this ).text( "作品集" );
	});
	$("#m3").mouseover(function() {
  		$( this ).text( "作業流程" );
	});
	$("#m4").mouseover(function() {
  		$( this ).text( "關於清設計" );
	});
	$("#m1").mouseout(function() {
  		$( this ).text( "HOME" );
	});
	$("#m2").mouseout(function() {
  		$( this ).text( "WORKS" );
	});
	$("#m3").mouseout(function() {
  		$( this ).text( "FLOW" );
	});
	$("#m4").mouseout(function() {
  		$( this ).text( "ABOUT QING" );
	});
	//test();
	
});