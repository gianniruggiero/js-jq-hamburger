var ico_hamburger = $('.header-right a');
var menu_hamburger = $('.hamburger-menu')
var ico_close_menu_hamburger = $('.fa-times')

ico_hamburger.click(
  function () {
    menu_hamburger.show(200);
  }
)

ico_close_menu_hamburger.click(
  function () {
    menu_hamburger.hide(200);
  }
)
