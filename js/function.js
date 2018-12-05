$(window).load(function() {
	$(".loader").fadeOut("slow");
})

// extra function
$(document).ready(function() {
	// search
	 var $searchTrigger = $('[data-ic-class="search-trigger"]'),
      $searchInput = $('[data-ic-class="search-input"]'),
      $searchClear = $('[data-ic-class="search-clear"]');
  
  $searchTrigger.click(function(){
    
    var $this = $('[data-ic-class="search-trigger"]');
    $this.addClass('active');
    $searchInput.focus();
    
  });
  
  $searchInput.blur(function(){
    
    if($searchInput.val().length > 0){
      
      return false;
      
    } else {
      
      $searchTrigger.removeClass('active');
      
    }
    
  });
  
  $searchClear.click(function(){
    $searchInput.val('');
  });
  
  $searchInput.focus(function(){
    $searchTrigger.addClass('active');
  });
  
  // accourdion
	$('#accordion2, #accordion').on('show.bs.collapse', function(n){
  $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-minus fa-plus');
});
$('#accordion2, #accordion').on('hide.bs.collapse', function(n){
  $(n.target).siblings('.panel-heading').find('.panel-title i').toggleClass('fa-plus fa-minus');
});
// start dropdown menu in hover
jQuery(function($) {
        $('ul.nav li.dropdown-m').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

        }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

        });

        $('.navbar .dropdown-m > a').click(function(){
            location.href = this.href;
        });
document.addEventListener("touchstart", function(){}, true);

});

// top
if ( ($(window).height() + 100) < $(document).height() ) {
    $('.top').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}
		 $('.top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0}, 1000);
    });
// start owl carasouel
$("#owl-demo3").owlCarousel({
	items : 4,
	autoplay: true,
		autoplayTimeout: 5000,
    loop:true,
	nav:true,
navText :	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        300:{
            items:1
        },
		600:{
            items:2
        },
		900:{
            items:3
        },
		1028:{
            items:3
        },
		1200:{
            items:4
        }
    }
});

});
	// album
	