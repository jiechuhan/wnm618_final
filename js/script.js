
// 	var activate = function(event){
// 		let target = $(event).data("activate");
// 		$(target).addClass("active");
// 	}

	
// var deactivate = function(event){
// 	console.log("123")
// 			let target = $(event).data("deactivate");
// 			$(target).removeClass("active");
// }

$(()=> {
	// $(".navbarIcon").on("click", function() {
	// 	console.log("124")
	// 	$(".menu").addClass("active");
	// });
$(document).on("click", "[data-activate]", function(e){
			var target = $(this).data("activate");
			$(target).addClass("active");
			// $(target).show("slide", { direction: "left" }, 1000);
		}) .on("click","[data-deactivate]",function(e){
      let target = $(this).data("deactivate");
      $(target).removeClass("active");
   })
	// $("[data-activate]")
	// 	.on("click",  function(e){
	// 		var target = $(this).data("activate");
	// 		$(target).addClass("active");
	// 		// $(target).show("slide", { direction: "left" }, 1000);
	// 	});
		// $(document).
	//  $target = $('.modal-drawer');
	// 	$target.on("click",function(e){	
	// 		console.log("123");
	// 		$parent = $target.parent();
	// 		if($parent.hasClass('active')){
	// 			$parent.removeClass("active");
	// 		}
				
		
		


		


});
