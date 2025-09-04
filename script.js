let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove',cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY = 'px';
    mouseCursor.style.top = e.pageX = 'px';
}


$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle')
    });

$(window).on('scroll load', function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
        $('.top').show();
    }else{
        $('.top').hide();
    }
})

// smooth scrooling

$('a[href*="#"]').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
    );
});




});