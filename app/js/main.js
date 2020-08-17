$(function () {
	console.log("JQuery reasy!");
	$(".slider-1").slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: $(".title__btn-left"),
		nextArrow: $(".title__btn-right"),
		easing: "ease"
	})




});