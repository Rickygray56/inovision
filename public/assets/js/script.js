// Change Navbar & logo color/size

$(window)
    .scroll(function () {
        if ($(document).scrollTop() > 125) {
            $('nav').addClass('shrink');
            $('.nav-link').addClass('link-color');
            $('.navbar-brand img').attr('src', 'assets/images/inovision-logo.svg');
        } else {
            $('nav').removeClass('shrink');
            $('.nav-link').removeClass('link-color');
            $('.navbar-brand img').attr('src', 'assets/images/about-logo.svg');
        }
    });

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}

// Show Back to top Button when scrolling
$(window).scroll(function () {
    if ($(document).scrollTop() > 810) {
        $('#button').css('display', 'inline-block');
    } else {
        $('#button').css('display', 'none');
    }
});

