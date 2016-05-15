$(window).load(function() {
  $('.loading').hide();
});

$('.project-details').scroll(function() {
  var scrollTop = $(this).scrollTop();
  $('.white-box').css('opacity', scrollTop / 100);
  var rgbValue = scrollTop / 10;
  //$('.navigation a').css('color', 'rgb(' + rgbValue + ',' + rgbValue + ',' + rgbValue +  ')');
  console.log($(this).scrollTop());
  if($(this).scrollTop() >= 100) {
    // alert('the top');
    $('.navigation a').css(
      {
      // 'background-color': 'white',
      }
    );
  } else {
    // $('.project-details>.navigation a').css(
    //   {
    //     'background-color': 'rgba(255, 255, 255, 0)'
    //   });
  }
  //  if($(this).scrollTop() + $(this).height() == $(document).height()) {
  //       alert('the top!');
  //  }
});
$(document).ready(function() {
  
  // $('.white-box').css('opacity', 0.5);
    $('#fullpage').fullpage({

      // autoScrolling: false,
      scrollOverflow: true,
      normalScrollElements: ".cv, .project-details",
      controlArrows: false,
      // slidesNavigation: true,
      // slidesNavPosition: 'top',
      // easingcss3: "cubic-bezier(.10, .10, 0, .74)",
      easingcss3: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
      // showActiveTooltip: true,
      // navigation: true,
      anchors: ['hjem', 'dubi', 'kjottkutt', 'grafisk'],
      afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
        if(anchorLink == "grafisk") {
          loopBottom: true;
        } else {
          loopBottom: false;
        }
      },
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
      if(anchorLink == 'hjem' && slideIndex == 0){
        $('.nav').show();
        $.fn.fullpage.setAllowScrolling(true, 'down');
      }
      else if(anchorLink == 'hjem' && slideIndex == 1){
        $.fn.fullpage.setAllowScrolling(false, 'down');
      };
      if(anchorLink == 'dubi') {

        if(slideIndex == 1) {
          $.fn.fullpage.setAllowScrolling(true, 'down');
          $.fn.fullpage.setAllowScrolling(true, 'up');
        } else {
          $.fn.fullpage.setAllowScrolling(false, 'down');
          $.fn.fullpage.setAllowScrolling(false, 'up');
        }
      }
    }
    });
    $('.preview, .site-title, .navigation').on("click", function() {
      $.fn.fullpage.moveSlideRight();
    })
    $('.to-folio').on("click", function() {
      $.fn.fullpage.moveSectionDown();
    })
    $('.to-about').on("click", function() {
      $.fn.fullpage.moveTo(1, 2);
    })
    $('.to-cv').on("click", function() {
      $.fn.fullpage.moveTo(1, 0);
    })
    // $("#cv").slimScroll({destroy: true});
});
