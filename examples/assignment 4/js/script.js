$(function(){
//Hide stuff

$('#getStarted, #finish, #previous, .hide, #survey').hide();
$('#howTo li').hide();


  //alert("hello");
  $('#title').on('mouseover', function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
    $('#getStarted').show();
  });

  $('#title').on('mouseleave',function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
  });

  $('#getStarted').on('click',function(){
      $('.hide').show();
      $('#getStarted').hide();
    });


      $('#finish').on('click',function(){
          $('.hide, #next, #previous, #finish').hide();
          $('#survey').show();
        // to do more....
    });

    ///survey
    $('#yes').on('click',function(){
      $('#surveytitle').css("background-color","green")
      $('#survey').css({"border":"1px solid green", "background":"#ccc"});
    });

    $('#no').on('click',function(){
    });
  $('#next').on('click',function(){
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
});
