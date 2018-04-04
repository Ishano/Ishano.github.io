<script>
    $(function(){
          $('.howto').hide();
          $('.buttonContainer').hide();
          //Hide the previous and finish button
          // $('.previous').hide();
          // $('.finish').hide();
          // $('.getStarted').hide();
          $('.getStarted, .finish, .previous').hide();
          $('.title').on('mouseover', function(){
            $('.getStarted').show();
            $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right').toggleClass('fa-arrow-alt-circle-left');
            });
            $('.title').on('mouseout', function(){
              $('.fa-arrow-alt-circle-right').toggleClass('fa-arrow-alt-circle-right').toggleClass('fa-arrow-alt-circle-left');
              });
          $('.getStarted').on('click',function(){
            $(this).hide();
            $('.howto, .buttonContainer').show();
          });
          $( '.next' ).on('click', function() {
          //First, we need to keep track of the current slide and the next slide. We achieve this by storing our elements in variables.
          var currentStep = $('li.active');
          // next() Documentation https://api.jquery.com/next/
          var nextStep =  $('li.active').next();
          // toggleClass() Documentation https://api.jquery.com/toggleClass/
          currentStep.toggleClass('active');
          nextStep.toggleClass('active');
          //Position based selectors:
          // first() https://api.jquery.com/first/
          // last() https://api.jquery.com/last/
          // Class attribute
          //https://api.jquery.com/hasClass/
          //https://api.jquery.com/addClass/
          //https://api.jquery.com/removeClass/
          //https://api.jquery.com/toggleClass/
          if($('li').last().hasClass('active')) {
            $('.next').hide();
            $('.finish').show();
          } else {
            $('.next').show();
          }
          if($('li').first().hasClass('active')) {
            $('.previous').hide();
          } else {
            $('.previous').show();
          }
          });
          // Your turn.. complete the previous function
          $( '.previous' ).on('click', function() {
            //First, we need to keep track of the current slide and the next slide. We achieve this by storing our elements in variables.
            var currentStep = $('li.active');
            // prev() Documentation https://api.jquery.com/prev/
            var previousStep =  $('li.active').prev();
            // toggleClass() Documentation https://api.jquery.com/toggleClass/
            currentStep.toggleClass('active');
            previousStep.toggleClass('active');
            //Position based selectors:
            // first() https://api.jquery.com/first/
            // last() https://api.jquery.com/last/
            // Class attribute
            //https://api.jquery.com/hasClass/
            //https://api.jquery.com/addClass/
            //https://api.jquery.com/removeClass/
            //https://api.jquery.com/toggleClass/
            if($('li').last().hasClass('active')) {
              $('.next').hide();
              $('.finish').show();
            } else {
              $('.next').show();
            }
            if($('li').first().hasClass('active')) {
              $('.previous').hide();
            } else {
              $('.previous').show();
            }
          });
            $( '.finish' ).on('click', function() {
              // Add html to the howto ol
              $('.howto').html('<li class="active survey"><h2>Did you like these instructions?</h2><button class="yes">Yes</button><button class="no">No</button></li>');
              // Hide the previous and next buttons
              $('.buttonContainer').hide();
            });
