//Card flip
function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('flip')) {
        $card.removeClass('flip');
    } else {
        $card.addClass('flip');
    }
}

//navbar  nav-item
function hideResponsiveNavItem(x) {
    if (x.matches) { // If media query matches
        $('.nav-link').click(function () {
            $('nav').removeClass('nav-bg-responsive');
            $('body').removeClass('position-fixed');
            $('nav').removeClass('mobile-header');
            $('.navbar-toggler').toggleClass('collapsed');
            $('.navbar-collapse').removeClass('show');
        });
    } else {
        return;
    }
}

var x = window.matchMedia("(max-width: 700px)")
hideResponsiveNavItem(x) // Call listener function at run time
x.addListener(hideResponsiveNavItem) // Attach listener function on state changes

//resizing
$(window).resize(function () {
    //do something

    var width = $(document).width();
    if (width > 990) {
        console.log("990");
        $('nav').removeClass('nav-bg-responsive');
        $('body').removeClass('position-fixed');
        $('nav').removeClass('mobile-header');
        $('.navbar-toggler').toggleClass('collapsed');
        $('.navbar-collapse').removeClass('show');
        // do something else
    }
});
