$(document).ready(function() {
    $('#fullpage').fullpage({

      // autoScrolling: false,
      scrollOverflow: true,
      normalScrollElements: ".cv",
      controlArrows: false,
      // showActiveTooltip: true,
      navigation: true,
      anchors: ['hjem', 'dubi', 'kjottkutt', 'grafisk'],
      afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    }, onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
      if(anchorLink == 'hjem' && slideIndex == 0){
        $('.nav').show();
        $.fn.fullpage.setAllowScrolling(true, 'down');
      };
      if(anchorLink == 'hjem' && slideIndex == 1){
        $.fn.fullpage.setAllowScrolling(false, 'down');
      }
    }
    });
    $('.to-folio').on("click", function() {
      $.fn.fullpage.moveSectionDown();
    })
    $('.to-about').on("click", function() {
      $.fn.fullpage.moveTo(1, 2);
    })
    $('.to-cv').on("click", function() {
      $.fn.fullpage.moveTo(1, 0);
    })
});
