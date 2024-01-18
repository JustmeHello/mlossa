;(function($) {
    "use strict";

    
    $('.we-sliders').owlCarousel({
        loop:true,
        margin:30,
        items:4,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            481:{
                items:2
            },
            700:{
                items:3
            },
            992:{
                items:4,
            }
        }
    });
    function selectMenu () {
        if ($('.select-menu').length) {
            $('.select-menu').selectmenu();
        };
    }
    selectMenu();
        
    $('.testimonial-sliders').owlCarousel({
        loop:false,
        margin:30,
        items:2,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            1200:{
                items: 2
            }
        }
    });
    
    function projectMasonry(){
        if ( $('#projects').length ){
            $('#projects').imagesLoaded( function() {
              // images have loaded
                      // Activate isotope in container
                $("#projects").isotope({
                    itemSelector: ".project",
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: '.grid-sizer'
                    }
                });

                // Add isotope click function
                $(".project_filter li").on('click',function(){
                    $(".project_filter li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $("#projects").isotope({
                        filter: selector
                    })
                })
            })
        }
    }
    
        
    function projectDescriptionGallery(){
        if($('.gallery-area').length){
            $(".gallery-area").imagesLoaded( function() {                
                $(".gallery-area").isotope({
                    itemSelector: ".gallery-single",
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: 1
                    }
                }) 
            })
        }
    }
  
    
    function revolutionSliderActiver () {
        if ($('.bannercontainer #rev_slider').length ) {
            $("#rev_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                navigation: {
                    arrows:{enable:true} 
                }, 
                gridwidth:1170,
                gridheight:740
            })
        }
    }
    
    /*Affix*/
    function affix_header () {
        if ($('#main_nav').length ) {
            $('#main_navbar').affix({
                offset: {
                    top: 63,
                    // bottom: function () {
                    //     return (this.bottom = $('footer').outerHeight(true))
                    // }
                }
            })
        }
    }
    
    
    
    /*Smooth Scroll*/
    function smoothScrollActivator () {
        if ($('#main_nav.smooth_scroll').length ) {
            $('#main_nav ul li a[href*="#"]').on('click', function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    var offset_top4scroll = $('#main_navigation').height();
                    if ( $(window).width() < 768 ){
                        offset_top4scroll = 34
                    }
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - offset_top4scroll
                        }, 1000);
                        return false
                    }
                }
                return false
            })
        }
    }
    
    
    /*Scroll Spy*/
    function scrollSpyActivator () {
        if ($('#main_nav.smooth_scroll').length ) {
            $('body').scrollspy({ 
                target: '#main_navigation', 
                offset: 59
            })
        }
    }
    
    
    
    /*----------------------------------------------------*/
    /*  Google Map
    /*----------------------------------------------------*/        
    function mapBox () {
        if ( $( '#mapBox' ).length ){
            var $lat = $('#mapBox').data('lat');
            var $lon = $('#mapBox').data('lon');
            var $zoom = $('#mapBox').data('zoom');
            
            var map = new GMaps({
                el: '#mapBox',
                lat: $lat,
                lng: $lon,
                scrollwheel: false,
                scaleControl: true,
                streetViewControl: true,
                panControl: true,
                disableDoubleClickZoom: true,
                mapTypeControl: true,
                zoom: $zoom
            }) 
        }
    }
    
    function popupGallery(){
        if ($('.popup-gallery').length) {
            $('.popup-gallery').each(function(){
                $('.popup-gallery').magnificPopup({
                    delegate: 'a.popup',
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                        titleSrc: function(item) {
                            return '<a href="'+ item.el.attr('data-source') +'">'+ item.el.attr('title') +'</a>' + '<small>'+  item.el.attr('data-desc')+'</small>';
                        }
                    }
                });
            })
        }
    }
    popupGallery();

    function customTabProductPageTab () {
        if ($('.product-details-tab-title').length) {
            var tabWrap = $('.product-details-tab-content');
            var tabClicker = $('.product-details-tab-title ul li');
            
            tabWrap.children('div').hide();
            tabWrap.children('div').eq(0).show();
            tabClicker.on('click', function() {
                var tabName = $(this).data('tab-name');
                tabClicker.removeClass('active');
                $(this).addClass('active');
                var id = '#'+ tabName;
                tabWrap.children('div').not(id).hide();
                tabWrap.children('div'+id).fadeIn('500');
                return false;
            });        
        }
    }
    customTabProductPageTab();


    function stickyHeader () {
        if ($('.navbar-static-top').length) {
            var strickyScrollPos = 50;
            if($(window).scrollTop() > strickyScrollPos) {
                $('.navbar-static-top').removeClass('fadeIn animated');
                $('.navbar-static-top').addClass('fadeInDown animated');
            }
            else if($(window).scrollTop() <= strickyScrollPos) {
                $('.navbar-static-top').removeClass('fadeInDown animated');
                $('.navbar-static-top').addClass('slideIn animated');
            }
        };
    }

    
    /*Function Calls*/    
    mapBox()
    revolutionSliderActiver();  
    affix_header();
    
    
    $(window).on('load', function(){
        smoothScrollActivator();
        scrollSpyActivator();
        
        projectMasonry();
        projectDescriptionGallery()
    });
    $(window).on('scroll', function(){
        stickyHeader();
    });
    
})(jQuery)