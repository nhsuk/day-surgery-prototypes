
$(document).ready(function() {

// console.log('hello world');

$('.hidden-help').hide();

// visibility toggle
(function($) {
    $.fn.invisible = function() {
        return this.css("visibility", "hidden");
    };
    $.fn.visible = function() {
        return this.css("visibility", "visible");
    };
})(jQuery);

  // Example - Highlight grid

  if ($('.js-highlight-grid').length>0) {

    $('.js-highlight-grid').click(function(e) {

      e.preventDefault();
      var html = $('html');

      if ($('.is-inner-block-highlight').length>0) {
        // Don't add more than once
      } else {
        $('.grid .inner-block').wrapInner('<div class="is-inner-block-highlight"></div>');
      }

      if (html.hasClass('example-highlight-grid')) {
          html.removeClass('example-highlight-grid');
      } else {
          html.addClass('example-highlight-grid');
      }

    });

  }


});
