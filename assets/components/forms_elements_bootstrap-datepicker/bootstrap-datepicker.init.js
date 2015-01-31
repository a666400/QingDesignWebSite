if (typeof $.fn.bdatepicker == 'undefined')
	$.fn.bdatepicker = $.fn.datepicker.noConflict();

$(function()
{

	/* DatePicker */
	// default
	$(".datepicker").bdatepicker({
		format: 'yyyy/mm/dd',
	    showMeridian: true,
	    autoclose: true//,
		//todayBtn: true
	});

	// other
	if ($('.datepicker').length) $(".datepicker").bdatepicker({ showOtherMonths:true });
	if ($('.datepicker-inline').length) $('.datepicker-inline').bdatepicker({ inline: true, showOtherMonths:true });

});