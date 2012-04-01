$(function(){

	var position  = parseInt($('#toc').css('top').replace('px',''));
	var tocHeight = $('#toc').outerHeight() + position;

	if ($(window).height() > tocHeight) {

		$(window).scroll(function () {
			if ($(document).scrollTop() < position) {
				$('#toc').css('top', position - $(document).scrollTop() + 'px');
			} else {
				$('#toc').css('top', 0);
			}
		});

	} else {
		$('#toc').addClass('stick');
	}

	$('#api').localScroll({
		duration: 500,
		hash: true
	});

});