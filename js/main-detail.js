$(document).ready(function(){
	init();

	$('#nav-detail li').click(function(e){
		$('#culture').fadeOut(1000);
		$('#nav-detail li').removeClass('nav-sel');
		$(this).addClass('nav-sel');
	});


	$('#vibe').click(function(e){
		e.preventDefault();
		$('#culture').fadeIn(1000);
		$('#nav-detail li').removeClass('nav-sel');
		$(this).addClass('nav-sel');
	});

});