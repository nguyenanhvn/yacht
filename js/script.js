jQuery(document).ready(function() {
    var width_device = jQuery(window).width();

    header();
    smooth_scroll_init();
    skrollr_int();
    jQuery(window).scroll(function() {
        header();
    });

    // jQuery('section.content-obanner').attr('data-anim', 'true');
    // jQuery('section.content-odbanner').attr('data-anim', 'true');

    jQuery(window).scroll(function(){
        jQuery('.content-obanner .shadow').css("opacity", jQuery(window).scrollTop() / 1500) - 1;
        jQuery('.content-obanner .box__flex').css("transform", 'matrix(1, 0, 0, 1, 0, ' + (jQuery(window).scrollTop() / 2.5) + ')');
        jQuery('.content-obanner .box__flex').css("opacity", 1 - jQuery(window).scrollTop() / 1500);

        jQuery('.content-odbanner .shadow').css("opacity", jQuery(window).scrollTop() / 1500) - 1;
        jQuery('.content-odbanner .box__flex').css("transform", 'matrix(1, 0, 0, 1, 0, ' + (jQuery(window).scrollTop() / 2.5) + ')');
        jQuery('.content-odbanner .box__flex').css("opacity", 1 - jQuery(window).scrollTop() / 1500);
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
        jQuery("html, body").animate({ scrollTop: jQuery(jQuery.attr(this, "href")).offset().top - 80 }, 1000);
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
            touchDrag: false,
            mouseDrag: false,
            startPosition: 1,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
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
    jQuery(".js-booking__person-value").off("click"),
    jQuery(".js-booking__person-value").on("click", function() {
        // a(),
        // s(),
        jQuery(this).parent().parent().find(".js-booking__modal").toggleClass("is-active");
    })
    
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

// BlocksIt
    var winWidth = jQuery(window).width();
    if(winWidth < 660) {
        col = 1
    } else if(winWidth < 992) {
        col = 2;
    } else {
        col = 3;
    }

    // setTimeout(function(){
        jQuery('.content-detination_3 .box__contents .item.item_active .item_box').BlocksIt({
            numOfCol: col,
            offsetX: 0,
            offsetY: 0
        });
        jQuery('.content-detination_5 .box_items').BlocksIt({
            numOfCol: col,
            offsetX: 0,
            offsetY: 0
        });
    // }, 100);
    

    //window resize
    jQuery(window).resize(function() {
        var winWidth = jQuery(window).width();
        if(winWidth < 660) {
            col = 1
        } else if(winWidth < 992) {
            col = 2;
        } else {
            col = 3;
        }
        
        jQuery('.content-detination_3 .box__contents .item.item_active .item_box').BlocksIt({
            numOfCol: col,
            offsetX: 0,
            offsetY: 0
        });
        jQuery('.content-detination_5 .box_items').BlocksIt({
            numOfCol: col,
            offsetX: 0,
            offsetY: 0
        });
    });

// Open Tabs
    if(jQuery('.box__scroll').length > 0) {        
        setSliderCss();
        jQuery(window).resize(function(){
            setSliderCss();
        });
    }
    var clickedTab = jQuery(".box__tabs .item_active");
    var tabWrapper = jQuery(".box__contents");
    var activeTab = tabWrapper.find(".item_active");
    jQuery(document).on('click', '.box__tabs .item', function(){
        if(!jQuery(this).hasClass('item_active')){
            setSliderCss(jQuery(this));
            // Remove class from active tab
            jQuery(".box__tabs .item").removeClass("item_active");
            
            // Add class active to clicked tab
            jQuery(this).addClass("item_active");
            
            // Update clickedTab variable
            clickedTab = jQuery(".box__tabs .item_active");

            // fade out active tab
            activeTab.fadeOut(250, function() {  
                var clickedTabIndex = clickedTab.index();
                jQuery('.box__contents .item').removeClass('item_active');

                jQuery(".box__contents .item").eq(clickedTabIndex).addClass("item_active");
                activeTab = jQuery(".box__contents .item_active");
                
                activeTab.fadeIn(250);
                jQuery('.content-detination_3 .box__contents .item.item_active .item_box').BlocksIt({
                    numOfCol: col,
                    offsetX: 0,
                    offsetY: 0
                });
            });
        }
    });

    jQuery(document).on('click', '.box__current', function(){
        jQuery('.box__tabs__mobile').addClass('tabs__open');
        jQuery('body').addClass('none-scroll');
    });
    jQuery(document).on('click', '.box__tabs__mobile .tabs__close', function(){
        jQuery('.box__tabs__mobile').removeClass('tabs__open');
        jQuery('body').removeClass('none-scroll');
    });

    var clickedTab = jQuery(".box__tabs__mobile .item_active");
    var tabWrapper = jQuery(".box__contents");
    var activeTab = tabWrapper.find(".item_active");
    jQuery(document).on('click', '.box__tabs__mobile.tabs__open .item', function(){
        if(!jQuery(this).hasClass('item_active')){
            setSliderCss(jQuery(this));
            // Remove class from active tab
            jQuery(".box__tabs__mobile .item").removeClass("item_active");
            
            // Add class active to clicked tab
            jQuery(this).addClass("item_active");
            
            // Update clickedTab variable
            clickedTab = jQuery(".box__tabs__mobile .item_active");

            // fade out active tab
            activeTab.fadeOut(250, function() {  
                var clickedTabIndex = clickedTab.index();
                jQuery('.box__contents .item').removeClass('item_active');
                jQuery(".box__contents .item").eq(clickedTabIndex).addClass("item_active");
                jQuery('.box__current span').text(clickedTab.text());
                activeTab = jQuery(".box__contents .item_active");
                
                activeTab.fadeIn(250);
                jQuery('.content-detination_3 .box__contents .item.item_active .item_box').BlocksIt({
                    numOfCol: col,
                    offsetX: 0,
                    offsetY: 0
                });
            });
        }
        jQuery('.box__tabs__mobile').removeClass('tabs__open');
        jQuery('body').removeClass('none-scroll');
    });

    jQuery(document).on('click', '.box__contents .item .item_more', function() {
        jQuery(this).prop('disabled', true);
        jQuery(this).addClass('item_loading');
        var that = jQuery(this);
        setTimeout(function() {
            that.prop('disabled', false);
            that.removeClass('item_loading');
        }, 3000);
    });

// Caculation img height of detination 1
    if(jQuery(window).width() > 992){
        setTimeout(function() {
            var heightC = jQuery('.content-detination_1 .box__2nd .nd__right').innerHeight() + jQuery('.content-detination_2').innerHeight();
            jQuery('.content-detination_1 .nd__img').css('height', heightC);
        }, 200);
    }
    jQuery(window).resize(function() {
        if(jQuery(window).width() > 992){
            var heightC = jQuery('.content-detination_1 .box__2nd .nd__right').innerHeight() + jQuery('.content-detination_2').innerHeight();
            jQuery('.content-detination_1 .nd__img').css('height', heightC);
        } else {
            jQuery('.content-detination_1 .nd__img').css('height', 'auto');
        }
    });

// Scroll Animation
    var $animation_elements = $('[data-anim]');
    var $window = $(window);

    function anim() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + 600);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + 600);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.attr('data-anim', "true");
            } else {
                // $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', anim);
    $window.trigger('scroll');
});

function header() {
    // Scroll article
    var position = jQuery(window).scrollTop();
    jQuery(window).scroll(function(event) {
        var scroll = jQuery(window).scrollTop();
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

function setSliderCss(that) {
    let width = 0;
    let left = 0;
    if(!that){
        setTimeout(function(){            
            jQuery('.box__scroll span').css('width', jQuery('.box__tabs .item:eq(0)').innerWidth());
            jQuery('.box__scroll span').css('left', jQuery('.box__tabs .item:eq(0)').offset().left);
        }, 100);
    } else {        
        width = that.innerWidth();
        left = that.offset().left;
        jQuery('.box__scroll span').css('width', width);
        jQuery('.box__scroll span').css('left', left);
    }
}


// smooth wheel scroll
function smooth_scroll_init(){

    if(!$('#fullpage').length) {

        if(is_mobile() || is_mac_os()) return;

        var $window = $(window);

        if(smooth_scroll_passive()){
            window.addEventListener("wheel",smooth_scroll_event,{passive: false});
        }else{
            $window.on("mousewheel DOMMouseScroll", smooth_scroll_event);
        }

    }

}

function smooth_scroll_passive(){

    var supportsPassive = false;
    try {
        document.addEventListener("test", null, { get passive() { supportsPassive = true }});
    } catch(e) {}

    return supportsPassive;

}

function smooth_scroll_event(event){

    event.preventDefault();

    var $window = $(window);
    var scrollTime = 1;
    var scrollDistance = $window.height() / 3;
    var delta = 0;

    if(smooth_scroll_passive()){
        delta = event.wheelDelta/120 || -event.originalEvent.detail/20;
    }else{
        if(typeof event.originalEvent.deltaY != "undefined"){
            delta = -event.originalEvent.deltaY/120;
        }else{
            delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/20;
        }
    }

    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);

    TweenMax.to($window, scrollTime, {
        scrollTo : { y: finalScroll, autoKill:true },
        ease: Power3.easeOut,
        overwrite: 5
    });
}

// skrollr first load init
function skrollr_int() {

    if( !is_mobile() ) {
        skr_init();

        $(window).on('load',function(){
            // load again when img a load
            if( skr != null ) {
                skr.refresh();
            }
        })
    }
}

// skrollr init function
function skr_init(){

    if($(window).width() <= 1023) {
        if( skr != null ) {
            skr.destroy();
        }
    } else {
        skr = skrollr.init({
            smoothScrolling: false,
            forceHeight: false
        });
    }
}

/* ********************************************* *
 * HELPERS
 * ********************************************* */
// SIMPLE MOBILE CHECK
function is_mobile(){
    return (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);
}
function is_mobile_ios(){
    return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
}

// SIMPLE BROWSER CHECK
function is_browser_chrome(){
    return /Chrome/.test(navigator.userAgent);
}
function is_browser_safari(){
    return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
}
function is_browser_firefox(){
    return /Firefox/.test(navigator.userAgent);
}
function is_browser_ie(){
    return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) !== null)));
}
function is_browser_ie9(){
    return ($.browser.msie  && parseInt($.browser.version, 10) <= 9) ? true : false;
}

// SIMPLE OS CHECK
function is_mac_os(){
    return navigator.platform.indexOf('Mac') > -1;
}

// SIMPLE SCREEN CHECK
function is_screen(max_width){
    if(!!window.matchMedia){
        return window.matchMedia('(max-width:'+ max_width +'px)').matches;
    }
}
