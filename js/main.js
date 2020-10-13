$(document).ready(function($){
	//mixitup portfolio section
    var mixer = mixitup('.light-box-content');

    $(".owl").owlCarousel();
    // Owl Next Privew Change

    //OLW carousel for Testimonial
    $('.owl-carousel-item').owlCarousel({
            loop:true,
            margin:20,
            nav:false,
            items:4,
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:3
                }
            }
        });

    //OLW carousel for Univercity
    $('.owl-carousel-univercity').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        items:4,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:5
            }
        }
    });

    //OLW carousel for team
    $('.owl-carousel-instructor').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:4
            }
        }
    });
     
    // For Sticky Menu
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 500) {
         $(".sticky-menu").removeClass("sticky");
        }else{
         $(".sticky-menu").addClass("sticky");
        }
       });
}(jQuery));
