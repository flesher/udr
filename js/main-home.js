$(document).ready(function(){

	var ulh = $('#nav ul').height() / -2;
	$('#nav ul').css('margin-top', ulh + "px");

	$('#nav li').click(function(){
		var self  = $(this);
		var index = $('#nav li').index($(this));
		var items = $('#nav li').length;
		var itemH = $('#nav li').height() + 20;
		var top   = ((index - 1) * itemH + itemH/2) * -1;

		$('#nav li').removeClass('selected');
		setTimeout(function(){
			self.addClass('selected');
		},1000);
		$('#nav ul').css('margin-top', top);

		$('#cities div').fadeOut(1000);
		$('#cities div').eq(index).fadeIn(1000);

	});

});