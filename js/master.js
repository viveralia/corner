// Smooth scrolling
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 850, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Video background
var videoBg = document.getElementsByClassName('fullscreen-video')[0];
if (window.matchMedia('(min-width: 992px)').matches) {
  videoBg.innerHTML = '<video autoplay loop muted class="d-none d-lg-block"><source src="img/training3.mp4" type="video/mp4"></video>';
} else {
  videoBg.innerHTML = '';
}

// Instafeed
var feed = new Instafeed({
    get: 'user',
    userId: '177922044',
    accessToken: '177922044.1677ed0.ca0d948bd97347b093d24d2d22dc01fb',
    // userId: '5763138881',
    // accessToken: '',
    limit: 4,
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    template: '<div class="col-6 col-md-3 p-0"><a href="{{link}}" title="{{caption}}" target="_blank" class="text-white ig-link"><div class="bg-image feed-item lazyload" data-bgset="{{image}}"><div class="instagram d-flex"><i class="fab fa-instagram d-block m-auto"></i></div></div></a></div>',
});
feed.run();


// Clipboard
var clipboard = new ClipboardJS('.clipboard');
let tooltipText = document.getElementsByClassName('tooltip-text')[0];
function clipboardReset() {
  tooltipText.innerHTML = "Copiar número";
}

clipboard.on('success', function(e) {
  tooltipText.innerHTML = "Copiado! 👍";
  setTimeout(clipboardReset, 1500);
});

clipboard.on('error', function(e) {
  tooltipText.innerHTML = "Error, inténtalo más tarde";
  setTimeout(clipboardReset, 1500);
});

// MobileCTA
var mobileCTA = document.getElementsByClassName('mobile-cta')[0];
var entrance = new Waypoint({
  element: document.getElementsByClassName('pricing')[0],
  handler: function(){
    mobileCTA.classList.toggle('slideInUp');
  }
});
var exit = new Waypoint({
  element: document.getElementsByTagName('footer')[0],
  handler: function(){
    mobileCTA.classList.toggle('slideOutDown');
  }
});
var reset = new Waypoint({
  element: document.getElementsByClassName('pricing')[0],
  handler: function(direction){
    if (direction == 'up') {
      mobileCTA.classList.toggle('slideOutDown');
    } else {
      mobileCTA.classList.remove('slideOutDown');
    }
  }
});

;(function () {
	'use strict';
	// Animations
	var contentWayPoint = function() {
		var i = 0;
		$('.reveal-on-scroll').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .reveal-on-scroll.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
				}, 100);
			}
		} , { offset: '95%' } );
	};
	// Document on load.
	$(function(){
		// Animate
		contentWayPoint();
	});
}());
