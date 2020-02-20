(function ($) {
    "use strict";

    $(document).ready(function () {
        /*---------------------------------------------------
            Portfolio Filter
        ----------------------------------------------------*/
        var Container = $('.container');
        Container.imagesLoaded(function () {
            var portfolio = $('.portfolio-menu');
            portfolio.on('click', 'button', function () {
                $(this).addClass('active').siblings().removeClass('active');
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.portfolio-list').isotope({
                itemSelector: '.grid-item'
            });

        });

        /*---------------------------------------------------
            Testimonial Carousel
        ----------------------------------------------------*/
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        /*---------------------------------------------------
            Portolio Carousel
        ----------------------------------------------------*/
        $('.portfolio-image-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1920: {
                    items: 2
                }
            }
        });

        /*---------------------------------------------------
                Magnific PopUp
        ----------------------------------------------------*/
        $('.popup-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

    });

    /*---------------------------------------------------
        Smooth Scroll
    ----------------------------------------------------*/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);

    });

    /*---------------------------------------------------
        Click To Top
    ----------------------------------------------------*/
    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 300) {
            $('#footer > .totop a').fadeIn();
        } else {
            $('#footer > .totop a').fadeOut();
        }

    });

    /*---------------------------------------------------
        Site Preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.site-preloader').fadeOut(500);
    });


}(jQuery));
