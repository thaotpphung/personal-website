var sections = $("section"),
  nav = $("nav");
$(".window").scroll(function () {
  var screen = $(".window")[0];
  var curPos = screen.scrollTop;
  if (curPos >= 20) {
    nav.addClass("scrolled");
  } else {
    nav.removeClass("scrolled");
  }
  sections.each(function () {
    var top = $(this)[0].offsetTop - $(".window")[0].offsetTop;
      bottom = top + $(this).outerHeight();
    if (curPos >= top && curPos <= bottom) {
      nav.find("a").removeClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});

