$(function(){
  //alert("hello");
  $('#title').on('mouseover', function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
  });
  $('#title').on('mouseleave', function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
  });
});
