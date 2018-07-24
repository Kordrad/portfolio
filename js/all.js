// Slide Menu
$(document).ready(function () {
	$(".menu").hide();
	$(".bar .fas").click(function () {
		$(".menu").slideToggle("slow");
	});
});

window.sr = ScrollReveal({
	//			reset: true
});
/*sr.reveal('.title', {
	distance: '20px',
	duration: 1000
});*/
sr.reveal('.icon', {
	distance: '20px',
	duration: 750
});
sr.reveal('.project-box', {
	distance: '20px',
	duration: 750
});
sr.reveal('#about-me img, #about-me p', {
	distance: '20px',
	duration: 1500
});

$(document).ready(function () {
	$(document).ready(function () {
		var birthday = new Date("9/2/1997");
		var today = new Date();
		var years = today.getFullYear() - birthday.getFullYear();
		birthday.setFullYear(today.getFullYear());
		if (today < birthday) {
			years--
		}
		if (years % 10 == 0 && years <= 21) {
			$(".age").text(years + "  lat")
		} else {
			$(".age").text(years + "  lata")
		};
	});
});


var typed = new Typed('.typejs', {
	strings: [ 
		" ", 
		"Kocham Programować.", 
		"Lubię to co robię.",
		"Oddaję się mojej pasji."
	],
	typeSpeed: 120,
	backDelay: 220,
	loop: true
});


$('input[value="✕"]').click(function (){
	$(".windowexe").hide();
	$(".apps").hide();
});



// app
$('input[value="□"]').click(function (){
//	$(".windowexe").addClass("windowexeALL");
	$(".windowexe").toggleClass("windowexeALL");
	$(".namewindow").toggleClass("namewindowALL");
	$(".block").toggleClass("blockALL");
//	$('input[value="□"]').css({"background-color":"white"})
});


$('input[value="_"]').click(function (){
	$(".windowexe").hide();
});


$(".apps, #home #icon").click(function (){
	$(".windowexe").show();
	$(".apps").show();
});


// arrow animated
$("#arrow").on("click", function(){
	$("main").animate({
		scrollTop: $("main").offset().top
	}, 1000)
});


//var $off = $("#sectionUP").offset().top;

function widthMenu(){
	var windowSize = $(window).width();
	var size = 530;
	if (windowSize >= size) {
//		alert("W");
		$(".bar").hide();
		$(".menu").show();
		
	} else if (windowSize < size) {
		$(".bar").show();
		$(".menu").hide();
		
	}
//	$(".namewindow span").text($( window ).width());
}
$(window).ready(widthMenu).resize(widthMenu);



$(document).ready(function() { 
 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
	
	$('a[href^="#main"]').on('click', function(event) {
		
			$('html, body').animate({ scrollTop: 0 }, 1000);
	});
 
});




//$(".windowexe").draggable({
//		containment: "#home", 
//	})