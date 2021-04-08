jQuery(document).ready(function() {
    var width_device = jQuery(window).width();
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    header();
    jQuery(window).scroll(function() {
        header();
    });

    setTimeout(function() {
        jQuery('#loading').addClass('end');
    }, 1000);
    setTimeout(function() {
        jQuery('#loading').addClass('remove');
    }, 3000);

    jQuery(document).on('click', 'a', function(event) {
        event.preventDefault();
        /* Act on the event */
        var nextPage = jQuery(this).attr('href');

        jQuery('#loading').removeClass('remove');

        setTimeout(function() {
            jQuery('#loading').removeClass('end');
        }, 2000);
        window.location.href = nextPage;
    });

    jQuery(document).on("click", '.scroll--indicator', function (event) {
        event.preventDefault();
        jQuery("html, body").animate({ scrollTop: jQuery($.attr(this, "href")).offset().top - 80 }, 1000);
    });

    /*=================================================
        					Custom
	=====================================================*/
    if (jQuery('.content-intro .middle__slider').length > 0) {
        jQuery('.content-intro .middle__slider').owlCarousel({
            loop: true,
            autoplayTimeout: 5000,
            nav: true,
            autoplay: false,
            dots: false,
            margin: 0,
            navSpeed: 2200,
            dragEndSpeed: 2200,
            items: 1,
            navText: [
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="45.331" height="17.061" viewBox="0 0 45.331 17.061"><g transform="translate(1.061 0.53)"><path d="M-6774.346,1598.661h-44" transform="translate(6818.616 -1590.76)" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M-6764.03,1556.572l-8,8,8,8" transform="translate(6772.03 -1556.572)" fill="none" stroke="#fff" stroke-width="1.5"/></g></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="45.331" height="17.061" viewBox="0 0 45.331 17.061"><g transform="translate(0 0.53)"><path d="M-6818.346,1598.661h44" transform="translate(6818.346 -1590.76)" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M-6772.03,1556.572l8,8-8,8" transform="translate(6808.301 -1556.572)" fill="none" stroke="#fff" stroke-width="1.5"/></g></svg></div>'
            ],
            onInitialized: counter,
            onChanged: counter,
        });
        function counter(event) {
            if (!event.namespace) {
                return;
            }
            var slides = event.relatedTarget;
            if(slides.items().length > 9){
                if((slides.relative(slides.current()) + 1) > 9) {
                    jQuery('.middle__count').text(slides.relative(slides.current()) + 1 + '/' + slides.items().length);
                } else {
                    jQuery('.middle__count').text('0' + (slides.relative(slides.current()) + 1) + '/' + slides.items().length);
                }
            } else {
                jQuery('.middle__count').text('0' + (slides.relative(slides.current()) + 1) + '/' + '0' + slides.items().length);           
            }
        }
    }
    if (jQuery('.content-rooms .box__slider').length > 0) {
        jQuery('.content-rooms .box__slider').owlCarousel({
            loop: true,
            autoplayTimeout: 5000,
            nav: true,
            autoplay: false,
            dots: false,
            margin: 30,
            navSpeed: 2200,
            dragEndSpeed: 2200,
            items: 1,
            startPosition: 1,
            navText: [
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="45.331" height="17.061" viewBox="0 0 45.331 17.061"><g transform="translate(1.061 0.53)"><path d="M-6774.346,1598.661h-44" transform="translate(6818.616 -1590.76)" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M-6764.03,1556.572l-8,8,8,8" transform="translate(6772.03 -1556.572)" fill="none" stroke="#fff" stroke-width="1.5"/></g></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="45.331" height="17.061" viewBox="0 0 45.331 17.061"><g transform="translate(0 0.53)"><path d="M-6818.346,1598.661h44" transform="translate(6818.346 -1590.76)" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M-6772.03,1556.572l8,8-8,8" transform="translate(6808.301 -1556.572)" fill="none" stroke="#fff" stroke-width="1.5"/></g></svg></div>'
            ],
            navContainer: '.content-rooms .owl__nav',
        });
    }

    jQuery(document).on('click', '.content-rooms .nav__next', function() {
        jQuery('.content-rooms .box__info').trigger('next.owl.carousel');
    });

    jQuery(document).on('mouseover', '.content-rooms .box__info .item', function() {
        jQuery(this).find('.item__bottom').slideDown(400);
    });

    jQuery(document).on('mouseleave', '.content-rooms .box__info .item', function() {
        jQuery(this).find('.item__bottom').slideUp(400);
    });

    if (jQuery('.content-rooms .box__info').length > 0) {
        jQuery('.content-rooms .box__info').owlCarousel({
            loop: true,
            autoplayTimeout: 5000,
            nav: false,
            autoplay: false,
            dots: false,
            margin: 30,
            navSpeed: 2200,
            dragEndSpeed: 2200,
            items: 1,
            startPosition: 1,
            navText: [
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="45.331" height="17.061" viewBox="0 0 45.331 17.061"><g transform="translate(1.061 0.53)"><path d="M-6774.346,1598.661h-44" transform="translate(6818.616 -1590.76)" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M-6764.03,1556.572l-8,8,8,8" transform="translate(6772.03 -1556.572)" fill="none" stroke="#fff" stroke-width="1.5"/></g></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="45.331" height="17.061" viewBox="0 0 45.331 17.061"><g transform="translate(0 0.53)"><path d="M-6818.346,1598.661h44" transform="translate(6818.346 -1590.76)" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M-6772.03,1556.572l8,8-8,8" transform="translate(6808.301 -1556.572)" fill="none" stroke="#fff" stroke-width="1.5"/></g></svg></div>'
            ],
        });
    }


    if (jQuery('.content-packages .slider__packages').length > 0) {
        jQuery('.content-packages .slider__packages').owlCarousel({
            loop: false,
            autoplayTimeout: 5000,
            nav: true,
            autoplay: false,
            dots: false,
            lazyLoad: true,
            margin: 30,
            autoplayHoverPause: true,
            autoplaySpeed: 700,
            navSpeed: 700,
            dragEndSpeed: 700,
            items: 3,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: [
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="45.331" height="17.061" viewBox="0 0 45.331 17.061"><g transform="translate(1.061 0.53)"><path d="M-6774.346,1598.661h-44" transform="translate(6818.616 -1590.76)" fill="none" stroke="#f8c1b8" stroke-width="1.5"/><path d="M-6764.03,1556.572l-8,8,8,8" transform="translate(6772.03 -1556.572)" fill="none" stroke="#f8c1b8" stroke-width="1.5"/></g></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="45.331" height="17.061" viewBox="0 0 45.331 17.061"><g transform="translate(0 0.53)"><path d="M-6818.346,1598.661h44" transform="translate(6818.346 -1590.76)" fill="none" stroke="#f8c1b8" stroke-width="1.5"/><path d="M-6772.03,1556.572l8,8-8,8" transform="translate(6808.301 -1556.572)" fill="none" stroke="#f8c1b8" stroke-width="1.5"/></g></svg></div>'
            ],
            navContainer: '.content-packages .owl__nav',
            responsive: {
                0: {
                    items: 1,
                },
                450: {
                    items: 2,
                    margin: 15,
                },
                992: {
                    items: 3,
                }
            },
        });
    }

	var down = 0;

    jQuery(document).on('mouseover', '.content-services .box__options .item', function() {
    	var index = jQuery(this).index();
    	if(!jQuery(this).hasClass('active')){
    		jQuery('.content-services .box__options .item').removeClass('active');
	    	jQuery(this).closest('.content-services').attr('data-item', index + 1);
	    	jQuery(this).addClass('active');
    	}
    });

    jQuery(document).on('click', 'section.content-banner .box__form .form__dropdown .value__current', function() {
    	jQuery(this).parent().toggleClass('value__open');
    });

    function t(t) {
        var n = t.split("/")
          , o = new Date(n[2],n[1] - 1,n[0])
          , i = jQuery.datepicker.formatDate("dd__MM", o);
        return i = i.replace("__", "");
    }
    z = jQuery(".js-checkin").length;

    var n = jQuery(".js-checkin").datepicker({
        altFormat: "dd, MM",
        dateFormat: "dd MM yy",
        defaultDate: "+1d",
        minDate: new Date(2018,11,28),
        numberOfMonths: 1,
        showOtherMonths: !0,
        onSelect: function(n) {
            jQuery(".js-checkin").removeClass("visible"),
            jQuery("input[name=checkin]").val(n),
            o.datepicker("option", "minDate", n),
            jQuery(".js-booking__checkin .c-booking__span").text(n),
            0 == z && jQuery(this).parent().parent().parent().find(".js-checkout").addClass("visible"),
            z--
        }
    })
      , o = jQuery(".js-checkout").datepicker({
        altFormat: "dd, MM",
        dateFormat: "dd/mm/yy",
        minDate: 0,
        numberOfMonths: 1,
        showOtherMonths: !0,
        onSelect: function(o) {
            jQuery(".js-checkout").removeClass("visible"),
            jQuery("input[name=checkout]").val(o),
            jQuery(".js-booking__checkout .c-booking__span").text(o),
            n.datepicker("option", "maxDate", o),
            jQuery(".js-booking__checkout .c-booking__span").text(t(o))
        }
    });

    jQuery(".js-booking__checkin").off("click"),
    jQuery(".js-booking__checkin").on("click", function(t) {
        t.stopPropagation();

        if(jQuery(this).hasClass('is-active')) {
            jQuery(this).removeClass("is-active");
            jQuery(this).children(".js-checkin").removeClass("visible");            
        } else {
            jQuery(this).addClass("is-active");
            jQuery(this).children(".js-checkin").addClass("visible");            
        }
    }),
    jQuery(".js-booking__checkout").off("click"),
    jQuery(".js-booking__checkout").on("click", function(t) {
        t.stopPropagation();

        if(jQuery(this).hasClass('is-active')) {
            jQuery(this).removeClass("is-active");
            jQuery(this).children(".js-checkout").removeClass("visible");            
        } else {
            jQuery(this).addClass("is-active");
            jQuery(this).children(".js-checkout").addClass("visible");            
        }
    }),
    jQuery(".js-booking__checkin .c-booking__wrapper-span").off("click"),
    jQuery(".js-booking__checkin .c-booking__wrapper-span").on("click", function(t) {
        jQuery(this).next().hasClass("visible") && (t.stopPropagation())
        // a(),
        // s())
    }),
    jQuery(".js-booking__checkout .c-booking__wrapper-span").off("click"),
    jQuery(".js-booking__checkout .c-booking__wrapper-span").on("click", function(t) {
        jQuery(this).next().hasClass("visible") && (t.stopPropagation())
        // a(),
        // s())
    }),
    // jQuery(".js-checkin .ui-datepicker-current-day").click(),
    // jQuery("body").off("click", a),
    // jQuery("body").on("click", a),
    // jQuery(".js-booking-submit").off("click"),
    // jQuery(".js-booking-submit").on("click", function(t) {
    //     var n = e(this).parent().parent().parent().find(".js-booking-fields input[name=checkin]").val()
    //       , o = e(this).parent().parent().parent().find(".js-booking-fields input[name=checkout]").val()
    //       , i = e(this).parent().parent().parent().find(".js-booking-fields input[name=adult_pax]").val();
    //     e(this).parent().parent().parent().find(".js-booking-fields input[name=promocode]").val();
    //     return !(!n || !o || 0 != isNaN(i)) && (a(),
    //     s(),
    //     !0)
    // }),
    // jQuery(".js-booking__modal").each(function(e, t) {
    //     var n = new i(t);
    //     n.ready(),
    //     X.push(n)
    // }),
    jQuery(".js-booking__person-value").off("click"),
    jQuery(".js-booking__person-value").on("click", function() {
        // a(),
        // s(),
        jQuery(this).parent().parent().find(".js-booking__modal").toggleClass("is-active");
    })
    // jQuery("body").off("click", s),
    // jQuery("body").on("click", s),
    // jQuery(".js-booking__person").off("click"),
    // jQuery(".js-booking__person").on("click", function(e) {
    //     e.stopPropagation()
    // }),
    // 
    
    jQuery(document).on('click', '.form__dropdown .value__options .option .op__number .plus', function() {
        jQuery(this).parent().find('.current').val(Number(jQuery(this).parent().find('.current').val()) + 1);
    });
    jQuery(document).on('click', '.form__dropdown .value__options .option .op__number .minus', function() {
        if(jQuery(this).parent().find('.current').val() != '0') {
            jQuery(this).parent().find('.current').val(Number(jQuery(this).parent().find('.current').val()) - 1);            
        }
    });
    jQuery(document).on('click', '.form__dropdown .op__btn', function() {
        var adults = jQuery('#adults').val();
        var children = jQuery('#children').val();

        jQuery(this).closest('.form__dropdown').find('.value__current span').text(adults + ' Adults, ' + children + ' Childrens');    
        jQuery(this).closest('.form__dropdown').removeClass('value__open');
    });
});

function header() {
    // Scroll article
    var position = $(window).scrollTop();
    jQuery(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            jQuery('#header').addClass('active');
        } else {
            jQuery('#header').removeClass('active');
        }

        if (jQuery(this).scrollTop() > 400) {
            if (scroll > position) {
                jQuery('.go-to-top').removeClass('active');
            } else {
                jQuery('.go-to-top').addClass('active');
            }
        } else {
            jQuery('.go-to-top').removeClass('active');
        }
        position = scroll;
    });
}