$(document).ready(function(){
    // owl carousel

    $('.owl-carousel').owlCarousel({
        margin: 15,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                item: 1
            },
            1000: {
                item: 2
            },
            1200: {
                item: 3
            },
            1920: {
                item: 3
            }
        }
    });
    // wow
    new WOW().init();
     
});