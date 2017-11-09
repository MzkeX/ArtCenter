
//Preloader

document.body.onload = function( ){
	setTimeout(function() {
		// var preloader = document.getElementById('page_preloader');
		// if ( preloader.classList.contains('done')){
		// 	preloader.classList.addClass('done');
		// }
		$("#page_preloader").hide();
	}, 1000);
}

// Toggle Menu
$(".toggle_mnu").click(function() {
  $(this).toggleClass("on");
  $(".hidden_mnu, .logo").slideToggle();
  return false;
});



	// $('.sub_events').hide();
	// $('.sub_events:first').show();
	// $('.events li:first').addClass('active');

	// $('.events li').click(function(even) {

	// 	$('.events li').removeClass('active');
	// 	$(this).addClass('active')
	// 	$('.sub_events').hide();
		
	// 	var selectTab = $(this).find('a').attr("href");
	// 	$(selectTab).fadeIn();
	// });


// Tabs Short

$(".sub_events").not(":first").hide();
$(".events li").click(function() {

 	$(".events li").removeClass("active_event").eq($(this).index()).addClass("active_event");
 	$(".sub_events").hide().eq($(this).index()).fadeIn()

}).eq(0).addClass("active_event");





// Mail Post
$("#mail_form").hide();
$(".let_info a").click(function() {
	$(".let_info a").hide();

    $(this).closest('.let_info').find('#mail_form').show();
});

// Map 


      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 55.81712538, lng: 49.13754344},
          zoom: 16,
          styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
    	});

   //  	 var InfoWindow = new google.maps.InfoWindow({
   //  	 	content: '<div class="map_icon">'+
		 // 	'<h1 id="" class="">Магазин на чистопольской</h1>'+
			// '<div id="map_icon_content">'+
			// 	'<div><i class="fa fa-map-marker" aria-hidden="true"></i> <p>г.Казань, ул.Чистопльская, д.62</p></div>' +
		 // 		'<div><i class="fa fa-envelope-o" aria-hidden="true"></i> <p>artcenter@inbox.ru</p></div>'+
		 // 		'<div><i class="fa fa-phone" aria-hidden="true"></i> <span>8 800 555-35-35</span></div>'+
			//  	'</div>'+
			// '</div>'
   //  	 })
  		

   addMarker({ lat: 55.81843943, lng: 49.12878871, info: '<div>sfsdfsdfsdfsfsd</div>'});

   addMarker({lat: 55.81712538, lng: 49.13754344});


   function addMarker(coordinates) {
	      var marker = new google.maps.Marker({
	        position: coordinates,
	       	map: map
   		 });
	}

}

// OWL CAROUSEL 

$(window).on('load', function(){
	$('.main_slider').owlCarousel({
		loop:true,
		nav:true,
		navText:['<div class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', '<div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'],
		items:1,
		smartSpeed:1000
	})
});