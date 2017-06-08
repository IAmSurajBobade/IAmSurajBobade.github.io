$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
	//add smooth scrolling to lin in navbar + footer
	$(".navbar a, #copyright a[href='#top']").on('click', function(event) {
		if(this.hash !== ""){
			event.preventDefault();
			//store hash
			var hash = this.hash;
			//for smooth scroll, 900= milisec to scroll to target
			$('html,body').animate({
				scrollTop: $(hash).offset().top
			},900, function(){
				window.location.hash = hash;
			});
		}
	});
$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})
$(function(){
	$('img').imgPreload()
});