$(() => {
	// $(".navbarIcon").on("click", function() {
	// 	console.log("124")
	// 	$(".menu").addClass("active");
	// });

	$(document)

		// $(".navbarIcon").toggle("slide");

		.on("click", "[data-activate]", function(e){
			let target = $(this).data("activate");
			$(target).addClass("active");
			// $(target).show("slide", { direction: "left" }, 1000);
		})
		.on("click", "[data-deactivate]", function(e){
			console.log("123")
			let target = $(this).data("deactivate");
			$(target).removeClass("active");
		})

		// $(".slide").scrollLeft(300);


		$(".mid-prev").click(function() {
			event.preventDefault();
    		$('.slide').animate({scrollLeft:'-=300'},500);
  		});


		$(".mid-next").click(function() {
			event.preventDefault();
    		$('.slide').animate({scrollLeft:'+=300'},500);
		});

	

	function myMap() {
		var mapProp= {
		  center:new google.maps.LatLng(51.508742,-0.120850),
		  zoom:5,
		};
		var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
		}


});