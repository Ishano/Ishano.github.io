$(function(){
//Hide stuff

$('getStarted, #finish, #previous').hide();
$('#howTo li').hide();


  //alert("hello");
  $('#title').on('mouseover', function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
    $('getStarted').show();
  });
  $('#title').on('mouseleave', function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
  });

  $('#getStarted').on('click', function(){
      $('.hide').show();
      $('#getStarted').hide();
    });
  $('#next').on('click', function(){
    var currentItem = $('li.active');
    var nextItem = $('li.active').next();

    // Class attribute
    //https://api.jquery.com/hasClass/
    //https://api.jquery.com/addClass/
    //https://api.jquery.com/removeClass/
    //https://api.jquery.com/toggleClass/

    currentItem.toggleClass('active');

    nextItem.toggleClass('active');
 // Conditional eval.
    if($('li').last().hasClass('active')) {
      $('#next').hide();
      $('#finish').show();
    } else {
      $('#next').show();

    }
});

$('#previous').on('click', function(){
  var currentItem = $('li.active');
  var nextItem = $('li.active').next();
  //Position based selectors:
  //first() https://api.jquery.com/first/
  // last() https://api.jquery.com/last/
  // prev()
  currentItem.toggleClass('active');

  if($('li').last().hasClass('active')) {
    $('#next').hide();
    $('#finish').show();
  } else {
    $('#next').show();

  }

  nextItem.toggleClass('active');
// Conditional eval.
  if($('li').last().hasClass('active')) {
    $('#next').hide();
    $('#finish').show();
  } else {
    $('#next').show();

  }
});
