// Animação ao Scroll

var $target = $('[data-anime="scroll"]'),
		animationClass = 'animate',
		offset = ($(window).height() * 3/4) + 100;

function animeScroll() {
	var documentTop = $(document).scrollTop();
	
	$target.each(function(){
		var itemTop = $(this).offset().top;
		if (documentTop > itemTop - offset) {
			$(this).addClass(animationClass);
		} else {
			$(this).removeClass(animationClass);
		}
	});
}

animeScroll();

$(document).scroll(function(){
	animeScroll();
});

