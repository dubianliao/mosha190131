






$(function(){

	$('.list-item').click(function(){
		var $mark = $(this).find('span');
		var $kotae = $(this).find('.kotae');
		if($kotae.hasClass('open')){
			$kotae.removeClass('open');
			$kotae.slideUp();
			$mark.html('+');
		} else {
			$kotae.addClass('open');
			$kotae.slideDown();
			$mark.html('-');
		}
	});


});//全体の閉じタグ
