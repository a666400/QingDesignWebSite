
$(function()
{

/* Select2 - Advanced Select Controls */
	if (typeof $.fn.select2 != 'undefined')
	{
		$('.select2-mode').select2({
			allowClear: true
		});

		// templating
		function format(state) {
		    if (!state.id) return state.text; // optgroup
		    return "<img class='img-circle' src='assets/images/people/35/"+state.id.toLowerCase()+".jpg' alt='' style='margin-right:10px;' />" + state.text;
		}
		$("#select2_7").select2({
		    formatResult: format,
		    formatSelection: function(state){
		    	if (!state.id) return state.text; // optgroup
		    	return "<img class='avator img-circle' src='assets/images/people/35/"+state.id.toLowerCase()+".jpg' alt='' />" + state.text;
		    },
		    escapeMarkup: function(m) { return m; }
		});
	}
});