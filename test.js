/**
 * Custom JS - Custom js for APEZ template
 * @version v1.1.0
 * @copyright 2017 Pepdev.
 */

/**
* OnDOMLoad
* ThemeSlider
* ResponsiveMenu
* ThemeAccordion
* FormAjaxsubmit
* Contact Submit Form
* Slider
* CountDown
* Modal
* Gallery
*/

(function ($) {
    "use strict";

    //*************************************************
    //OnDOMLoad  **************************************
    //*************************************************

    $('[data-toggle="tooltip"]').tooltip();
    $(window).on('load', function () {
        $('.slider-wrapper').flexslider({
            animation: "fade",
            animationLoop: true,
            pauseOnHover: true,
            keyboard: true,
            controlNav: false
        });
        $('.slider-height').removeClass();
    });

    //*************************************************
    //ThemeSlider  ************************************
    //*************************************************
    $('.theme-flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        pauseOnHover: true
    });

    $(".theme-owlslider").owlCarousel({
        items: 1,
        dots: true
    });

    //*************************************************
    //ResponsiveMenu  *********************************
    //*************************************************
    
    $('.header-light').scrollToFixed({
        preFixed: function () {
            $('.header-light').addClass('hdr-fixed-light');
        },
        postFixed: function () {
            $('.header-light').removeClass('hdr-fixed-light');
        }
    });

    $('.header-dark').scrollToFixed({
        preFixed: function () {
            $('.header-dark').addClass('hdr-fixed-dark');
        },
        postFixed: function () {
            $('.header-dark').removeClass('hdr-fixed-dark');
        }
    });

    $('.header-colored').scrollToFixed({
        preFixed: function () {
            $('.header-colored').addClass('hdr-fixed-colored');
        },
        postFixed: function () {
            $('.header-colored').removeClass('hdr-fixed-colored');
        }
    });

    $('.header-gradient').scrollToFixed({
        preFixed: function () {
            $('.header-gradient').addClass('hdr-fixed-gradient');
        },
        postFixed: function () {
            $('.header-gradient').removeClass('hdr-fixed-gradient');
        }
    });

    $('body').on('click', '#menu-bar', function () {
        var menu = $('.menu');
        $('body').css('overflow', 'hidden');
        menu.css('left', '0');
        menu.show();
    });

    $('body').on('click', '.mobile-menu-close', function () {
        var menu = $('.menu');
        $('body').css('overflow', 'visible');
        menu.css('left', '-130%');
        menu.hide();
    });

    $(window).on('resize', function () {
        var menu = $('.menu');
        if ($(window).width() > 992) {
            $('body').css('overflow', 'visible');
            menu.css('display', 'block');
            menu.css('left', 'inherit');
        } else {
            menu.css('display', 'none');
            menu.css('left', '-130%');
        }
    });

    // added by manoranjan
    $(document).ready(function(){
        var submitIcon = $('.searchbox-icon');
        var inputBox = $('.searchbox-input');
        var searchBox = $('.searchbox');
        var isOpen = false;
        submitIcon.click(function(){
            if(isOpen == false){
                searchBox.addClass('searchbox-open');
                inputBox.focus();
                isOpen = true;
            } else {
                searchBox.removeClass('searchbox-open');
                inputBox.focusout();
                isOpen = false;
            }
        });  
        submitIcon.mouseup(function(){
            return false;
        });
        searchBox.mouseup(function(){
            return false;
        });
        $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbox-icon').css('display','block');
                submitIcon.click();
            }
        });
    });
    function buttonUp(){
        var inputVal = $('.searchbox-input').val();
        inputVal = $.trim(inputVal).length;
        if( inputVal !== 0){
            $('.searchbox-icon').css('display','none');
        } else {
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
        }
    }


    // ended by manoranjan


    //*************************************************
    //ThemeAccordion **********************************
    //*************************************************
    $('.theme-accordion:nth-child(1) .theme-accordion-bdy').slideDown();
    $('.theme-accordion:nth-child(1) .theme-accordion-control .fa').addClass('fa-minus');
    $('body').on('click', '.theme-accordion-hdr', function () {
        var ele = $(this);
        $('.theme-accordion-bdy').slideUp();
        $('.theme-accordion-control .fa').removeClass('fa-minus');
        if (ele.parents('.theme-accordion').find('.theme-accordion-bdy').css('display') === "none") {
            ele.find('.theme-accordion-control .fa').addClass('fa-minus');
            ele.parents('.theme-accordion').find('.theme-accordion-bdy').slideDown();
        } else {
            ele.find('.theme-accordion-control .fa').removeClass('fa-minus');
            ele.parents('.theme-accordion').find('.theme-accordion-bdy').slideUp();
        }
    });

    //Processing Button
    $('body').on('click', '.button-process', function () {
        var ele = $(this);
        ele.button('loading');
        setTimeout(function () { ele.button('reset'); }, 8000);
    });

    //*************************************************
    //request demo Form *****************************
    //*************************************************

   /* $('body').on('click', '.request-demo', function () {
        var ele = $(this), data = {};
        ele.button('loading');
        data.name = $('#name').val();
        data.email = $('#email').val();
        data.mobile = $('#phone').val();
        // data.subject = $('#subject').val();
        data.message = $('#message').val();
        $.ajax({
            type: 'post',
            url: 'contect/request-demo.php',
            //dataType:'html',
            data: { name: data.name, email: data.email, mobile: data.mobile, message: data.message },
            error: function () {
                $('.contact-error .alert').remove();
                $('.contact-error').append('<div class="alert alert-danger" role="alert">Server Error Please try again after some time...</div>');
            },
            success: function (response) {
                // alert(response);
                var data = $.parseJSON(response);
                if (data.status) {
                    ele.button('reset');
                    $('#name').val('');
                    $('#email').val('');
                    $('#phone').val('');
                    $('#message').val('');
                    $('.contact-error .alert').remove();
                    $('.contact-error').append('<div class="alert alert-success" role="alert">Thank you ! !&nbsp; Our sales team will contact you soon.</div>');
                } else {
                    ele.button('reset');
                    $('.contact-error .alert').remove();
                    $('.contact-error').append('<div class="alert alert-danger" role="alert">Please validate ' + data.error.error + ' ! ! !</div>');
                }
            }
        });
    });*/

    //*************************************************
    //contact Form *****************************
    //*************************************************

    /*$('body').on('click', '.contact-submit', function () {
        var ele = $(this), data = {};
        ele.button('loading');
        data.name = $('#name').val();
        data.email = $('#email').val();
        data.mobile = $('#phone').val();
        data.subject = $('#subject').val();
        data.message = $('#message').val();
        $.ajax({
            type: 'post',
            url: 'contect/contact-form.php',
            //dataType:'html',
            data: { name: data.name, email: data.email,subject: data.subject, mobile: data.mobile, message: data.message },
            error: function () {
                $('.contact-error .alert').remove();
                $('.contact-error').append('<div class="alert alert-danger" role="alert">Server Error Please try again after some time...</div>');
            },
            success: function (response) {
                // alert(response);
                var data = $.parseJSON(response);
                if (data.status) {
                    ele.button('reset');
                    $('#name').val('');
                    $('#email').val('');
                    $('#phone').val('');
                    $('#message').val('');
                    $('#subject').val('');
                    $('.contact-error .alert').remove();
                    $('.contact-error').append('<div class="alert alert-success" role="alert">Thanks for your message! We will contact you back as soon as it is possible.</div>');
                } else {
                    ele.button('reset');
                    $('.contact-error .alert').remove();
                    $('.contact-error').append('<div class="alert alert-danger" role="alert">Please validate ' + data.error.error + ' ! ! !</div>');
                }
            }
        });
    });*/

    //*************************************************
    //Slider ******************************************
    //*************************************************
    //Testimonial Slider
    $(".testimonial-container").owlCarousel({
        items: 1,
        dots: true
    });

    //*************************************************
    //CountDown ******************************************
    //*************************************************
    $('.counter').counterUp({
        delay: 10,
        time: 400
    });

    //*************************************************
    //Portfolio  ****************************************
    //*************************************************
    $('.gallery-block').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.portfolio-masonary').masonry({
        itemSelector: '.portfolio-img'
    });

    $('body').on('click', '.portfolio-filter' ,function(){
        var ele = $(this), value = ele.attr('data-filter');
        $('.portfolio-filter').removeClass('active');
        ele.addClass('active');
        if(value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.'+value).hide('2000');
            $('.filter').filter('.'+value).show('3000');
        }
    });

    $('.portfolio-gallery').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });

    $('.gallery').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });

}(jQuery));