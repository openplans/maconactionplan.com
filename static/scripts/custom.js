$(function(){
  'use strict';

  // image gallery interactivity
  $(document).on('click', '.macon-action-thumb-link', function(evt) {
    evt.preventDefault();
    var $this = $(this),
        $context = $this.parents('.macon-action-image-gallery'),
        caption = $this.attr('data-caption'),
        imageUrl = $this.attr('data-url');

    $context.find('.macon-action-thumb-link').removeClass('active prev next');
    $this.addClass('active');
    $this.prev('.macon-action-thumb-link').addClass('prev');
    $this.next('.macon-action-thumb-link').addClass('next');

    $context.find('.macon-action-image').attr('src', imageUrl);
    $context.find('.macon-action-caption').html(caption);
  });

  // get involved form toggles
  $(document).on('click', '.macon-action-toggle-link', function(evt) {
    evt.preventDefault();
    var $this = $(this),
        $context = $this.parent('.panel');

    $context.find('.macon-action-toggle-target').removeClass('hide');
    $this.addClass('hide');

  });

});
