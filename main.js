$(document).ready(function() {

    // Variables
    var btnNext = $('.slider-wrapper .next');
    var btnPrev = $('.slider-wrapper .prev');

    // Next slide on mouse click
    btnNext.click(function() {
        slidePrevNext('next');
    });
 
    // Prev slide on mouse click
    btnPrev.click(function() {
        slidePrevNext('prev');
    });


    // Next with keydown
    $(document).keydown(function(){
        
    });

//document ready end    
});


// FUNCTIONS

// Slide
function slidePrevNext(direction) {
    var activeImage = $('.images img.active');
    var activeCircle = $('.nav i.active');

    // active reset
    activeImage.removeClass('active');
    activeCircle.removeClass('active');

    // slide next
    if (direction == 'next') {
        if (activeImage.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        }else {
            activeImage.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }
    }

    // slide prev
    else if (direction == 'prev') {
        if (activeImage.hasClass('first')) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }else {
            activeImage.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    }
}