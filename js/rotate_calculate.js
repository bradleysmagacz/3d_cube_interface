$(document).ready(function() {
  
  $(window).on('load resize', setSize);

  var box = $('#box');
  var cubeClass = 'show-front';

  $('a').click(function() { 
    box.removeClass(cubeClass);
    cubeClass = this.className;
    box.addClass(cubeClass);
  });

  function setSize() {
    var containerWidth = $('.container').width() - 2;
    var containerHeight = $('.container').height() - 2;

    $('figure').css('width', containerWidth);
    $('figure').css('height', containerHeight);
  
  }

});