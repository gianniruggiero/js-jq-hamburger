var ico_hamburger = $('.header-right a');
var menu_hamburger = $('.hamburger-menu');
var ico_close_menu_hamburger = $('.close');

ico_hamburger.click(
  function () {
    menu_hamburger.addClass("active");
  }
)

ico_close_menu_hamburger.click(
  function () {
    menu_hamburger.removeClass("active");
  }
)
