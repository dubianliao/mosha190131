






$(function(){

	//アコーディオン
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

	//トップへ戻るボタン
	$('#top-btn').click(function(){
		$('html,body').animate({'scrollTop':0},500);
	});

	//トップへ戻るボタンの出現
	$(window).scroll(function(){
		var $btn = $('#top-btn');
		var $target = $('#content')
		var $targetadress = $($target).offset().top;

		var $btnscrolltop = $(window).scrollTop();

		if($btnscrolltop > $targetadress){
			$($btn).fadeIn();
		}else{
			$($btn).fadeOut();
		}
	});

	//ホバーアクション 大きいボタン
	$('.hover').hover(
		function(){
			$(this).css('backgroundColor','pink');
		},
		function(){
			$(this).css('backgroundColor','');
		}
	);

	//ホバーアクション SNSボタン
	$('.btn').hover(
		function(){
			$(this).css('backgroundColor','skyblue');
		},
		function(){
			$(this).css('backgroundColor','');
		}
	);	

	


});//全体の閉じタグ
