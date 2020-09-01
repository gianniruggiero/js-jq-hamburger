var ico_hamburger = $('.header-right a');
var menu_hamburger = $('.hamburger-menu')
var ico_close_menu_hamburger = $('.hamburger-menu a .fa-times')

ico_hamburger.click(
  function () {
    menu_hamburger.addClass("active");
    // menu_hamburger.position(20, 0);
  }
)

ico_close_menu_hamburger.click(
  function () {
    menu_hamburger.removeClass("active");
  }
)
