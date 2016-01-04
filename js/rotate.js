$(document).ready(function() {

  $(window).on('load resize', setSize);

  var box = $('#box');
  var container = $('.container');
  var cubeClass = 'show-front';

  $('a').on('click', rotator);

  var frontNav = $('.front').children();
  $('.navbar_left').on('swipe', rotator);

  function rotator(e) {
    e.preventDefault();
    box.removeClass(cubeClass);
    cubeClass = this.className;
    box.addClass(cubeClass);
    setSize();

    return cubeClass;
  }

  function setSize() {

    var containerWidth = container.width();
    var containerHeight = container.height();

    var transZ = containerHeight/2;
    var newtransZ = containerWidth/2;
    var transValue = containerWidth - containerHeight;
    var transX = transValue/2;
    var right_transZ = containerWidth - transZ;

    $('figure').css('width', containerWidth);
    $('figure').css('height', containerHeight);

    /**************************Regular Transform****************************/

    $("#box .front").css('transform', 'translateZ(' + transZ + 'px)');
    $("#box .back").css('transform', 'rotateX(-180deg) translateZ(' + transZ + 'px)');
    $("#box .left").css('transform', 'rotateY(-90deg) translateZ(' + transZ + 'px)');
    $("#box .right").css('transform', 'rotateY(90deg) translateZ(' + right_transZ + 'px)');
    $("#box .top").css('transform', 'rotateX(90deg) translateZ(' + transZ + 'px)');
    $("#box .bottom").css('transform', 'rotateX(-90deg) translateZ(' + transZ + 'px)');

    $("#box.show-front").css('transform', 'translateZ(-' + transZ + 'px)');
    $("#box.show-back").css('transform', 'translateZ(-' + transZ + 'px) rotateX(-180deg)');
    $("#box.show-left").css('transform', 'translateZ(-' + transZ + 'px) rotateY(90deg)');
    $("#box.show-right").css('transform', ' translateZ(-' + right_transZ + 'px) rotateY(-90deg)');
    $("#box.show-top").css('transform', 'translateZ(-' + transZ + 'px) rotateX(-90deg)');
    $("#box.show-bottom").css('transform', 'translateZ(-' + transZ + 'px) rotateX(90deg)');

    /**************************Webkit Transform****************************/
    $("#box .front").css('-webkit-transform', 'translateZ(' + transZ + 'px)');
    $("#box .back").css('-webkit-transform', 'rotateX(-180deg) translateZ(' + transZ + 'px)');
    $("#box .left").css('-webkit-transform', 'rotateY(-90deg) translateZ(' + transZ + 'px)');
    $("#box .right").css('-webkit-transform', 'rotateY(90deg) translateZ(' + right_transZ + 'px)');
    $("#box .top").css('-webkit-transform', 'rotateX(90deg) translateZ(' + transZ + 'px)');
    $("#box .bottom").css('-webkit-transform', 'rotateX(-90deg) translateZ(' + transZ + 'px)');

    $("#box.show-front").css('-webkit-transform', 'translateZ(-' + transZ + 'px)');
    $("#box.show-back").css('-webkit-transform', 'translateZ(-' + transZ + 'px) rotateX(-180deg)');
    $("#box.show-left").css('-webkit-transform', 'translateZ(-' + transZ + 'px) rotateY(90deg)');
    $("#box.show-right").css('-webkit-transform', ' translateZ(-' + right_transZ + 'px) rotateY(-90deg)');
    $("#box.show-top").css('-webkit-transform', 'translateZ(-' + transZ + 'px) rotateX(-90deg)');
    $("#box.show-bottom").css('-webkit-transform', 'translateZ(-' + transZ + 'px) rotateX(90deg)');

    if (cubeClass=='show-front' || cubeClass=='show-back' || cubeClass=='show-bottom' || cubeClass=='show-top') {
      $('figure.left').css('width', containerHeight);
      $('figure.right').css('width', containerHeight);
    }

    else if (cubeClass=='show-left' || cubeClass=='show-right') {
      $('figure.back').css('width', containerHeight);
      $('figure.front').css('width', containerHeight);
      $('figure.left').css('width', containerWidth);
      $('figure.right').css('width', containerWidth);

      $("#box .front").css('transform', 'translateX(' + transX + 'px) translateZ(' + newtransZ + 'px)');
      $("#box .back").css('transform', 'rotateX(-180deg) translateX(' + transX + 'px) translateZ(' + newtransZ + 'px)');
      $("#box .right").css('transform', 'rotateY(90deg) translateZ(' + transZ + 'px)');
      $("#box .top").css('transform', 'rotateX(90deg) rotateZ(90deg) translateZ(' + transZ + 'px)');
      $("#box .bottom").css('transform', 'rotateX(-90deg) rotateZ(-90deg) translateZ(' + transZ + 'px)');
      
      $("#box.show-front").css('transform', 'translateX(-' + transX + 'px) translateZ(-' + newtransZ + 'px)');
      $("#box.show-right").css('transform', ' translateZ(-' + transZ + 'px) rotateY(-90deg)');
      $("#box.show-back").css('transform', ' translateZ(-' + newtransZ + 'px) translateX(-' + transX + 'px) rotateY(180deg)');

      $("#box .front").css('-webkit-transform', 'translateX(' + transX + 'px) translateZ(' + newtransZ + 'px)');
      $("#box .back").css('-webkit-transform', 'rotateX(-180deg) translateX(' + transX + 'px) translateZ(' + newtransZ + 'px)');
      $("#box .right").css('-webkit-transform', 'rotateY(90deg) translateZ(' + transZ + 'px)');
      $("#box .top").css('-webkit-transform', 'rotateX(90deg) rotateZ(90deg) translateZ(' + transZ + 'px)');
      $("#box .bottom").css('-webkit-transform', 'rotateX(-90deg) rotateZ(-90deg) translateZ(' + transZ + 'px)');
      
      $("#box.show-front").css('-webkit-transform', 'translateX(-' + transX + 'px) translateZ(-' + newtransZ + 'px)');
      $("#box.show-right").css('-webkit-transform', ' translateZ(-' + transZ + 'px) rotateY(-90deg)');
      $("#box.show-back").css('-webkit-transform', ' translateZ(-' + newtransZ + 'px) translateX(-' + transX + 'px) rotateY(180deg)');
    }

  }

});