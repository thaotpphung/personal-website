$(function () {
	$(document).scroll(function () {
		var $nav = $("#mainNav");
		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	});
});