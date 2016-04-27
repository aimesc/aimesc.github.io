/*-------------------------------*/
/*           Nav Bar             */
/*-------------------------------*/


$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});



/* 

Nav Bar 

(function ($) {

    'use strict';

    // Toggle classes in body for syncing sliding animation with other elements
    $('#bs-example-navbar-collapse-2')
        .on('show.bs.collapse', function (e) {
            $('body').addClass('menu-slider');
        })
        .on('shown.bs.collapse', function (e) {
            $('body').addClass('in');
        })
        .on('hide.bs.collapse', function (e) {
            $('body').removeClass('menu-slider');
        })
        .on('hidden.bs.collapse', function (e) {
            $('body').removeClass('in');
        });

})(jQuery);

*/