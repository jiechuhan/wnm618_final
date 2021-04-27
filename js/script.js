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


});