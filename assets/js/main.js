(function($) {
    "use strict";
    /* -------------------------------------
               Prealoder
         -------------------------------------- */
    $(window).on('load', function(event) {
        $('.js-preloader').delay(500).fadeOut(500);
    });

    /* -------------------------------------
          Open Search
    -------------------------------------- */
    $('.searchbtn').on('click', function() {
        $('.search-area').addClass('open');
    });
    $('.close-searchbox').on('click', function() {
        $('.search-area').removeClass('open');
    });


    /* -------------------------------------
          Language Dropdown
    -------------------------------------- */
    $(".language-option").each(function() {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function() {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })
    $('.user-option').on('click', function() {
        $('.user-menuitem').toggleClass('open');
    });
    /* -------------------------------------
              Counter 
    -------------------------------------- */
        $(".odometer").appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    /* -------------------------------------
           Progressbar 
    // -------------------------------------- */

    $(window).scroll(function() {
        // if ($(window).scrollTop() > 100) { // scroll down abit and get the action   

        $('.progress-bar').each(function() {
            $(this).find('.progress-content').animate({
                width: $(this).attr('data-percentage')
            }, 2000);

            $(this).find('.progress-number-mark').animate({ right: $(this).attr('data-percentage') }, {
                duration: 2000,
                step: function(now, fx) {
                    var data = Math.round(now);
                    $(this).find('.percent').html(data + '%');
                }
            });
        });
        // }
    });


    /* -------------------------------------
           Hero Slider 
    // -------------------------------------- */
    var mySwiper = new Swiper ('.hero-slider-one', {
        speed: 1000,
        loop: true,
        spaceBetween: 20,
        autoHeight: true,
            autoplay: {
            delay: 5000,
            waitForTransition: true,
            disableOnInteraction: false,
          },
        fadeEffect: { crossFade: true },
        effect: "fade",
        pagination: {
          el: '.hero-one-pagination',
                clickable: true,
                renderBullet: function (index, className) {
              return '<span class="' + className + '">'+'<svg class="fp-arc-loader" width="26" height="26" viewBox="0 0 16 16">'+
                            '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#A47355"'+
                            'stroke-opacity="1" stroke-width="1.5px"></circle>'+
                    '<circle cx="8" cy="8" r="3" fill="#A47355"></circle>'+
                            '</svg></span>';
            },
    
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
   
    /* -------------------------------------
           Service Slider 
     -------------------------------------- */
    var service_slider_one = new Swiper(".service-sider-one", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slidesPerView: 3,
        speed: 1500,
        freeMode: true,
        navigation: {
            nextEl: ".service-one-next",
            prevEl: ".service-one-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1

            },
            768: {
                slidesPerView: 1.5,
                centeredSlides: true

            },
            992: {
                slidesPerView: 2

            },
            1200: {
                slidesPerView: 3


            }
        }
    });

    /* -------------------------------------
           Partner Slider 
     -------------------------------------- */
    var service_slider = new Swiper(".partner-slider", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        speed: 1500,
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween:10

            },
            576: {
                slidesPerView: 3,
                spaceBetween:10

            },
            768: {
                slidesPerView: 4

            },
           992: {
                slidesPerView: 5

            },
            1200: {
                slidesPerView: 6


            }
        }
    });
    /* ----------------------------------------
           Magnific Popup Video
     ------------------------------------------*/
    $('.video-play').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });
    /* -------------------------------------
           Testimonials Slider 
     -------------------------------------- */
    var testimonial_slider_one = new Swiper(".testimonial-slider-one", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 6000,
            disableOnInteraction: true,
        },
        slidesPerView: 3,
        speed: 1500,
        centeredSlides: true,
        navigation: {
        nextEl: ".testimonial-one-next",
        prevEl: ".testimonial-one-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1

            },
            768: {
                slidesPerView: 2

            },
            1200: {
                slidesPerView: 3


            }
        }
    });
     var testimonial_slider_one = new Swiper(".testimonial-slider-two", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 7000,
            disableOnInteraction: true,
        },
        speed: 1500,
        centeredSlides: true,
         navigation: {
        nextEl: ".testimonial-two-next",
        prevEl: ".testimonial-two-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1

            },
            768: {
                slidesPerView: 2

            },
            1200: {
                slidesPerView: 3


            }
        }
    });
    var testimonial_slider_three = new Swiper(".testimonial-slider-three", {
        loop: true,
        spaceBetween: 25,
        navigation: {
            nextEl: ".testimonial-three-next",
            prevEl: ".testimonial-three-prev",
        },
        speed: 1500,
        
        breakpoints: {
            0: {
                slidesPerView: 1

            },
            768: {
                slidesPerView: 1.2

            },
            992: {
                slidesPerView: 2

            },
            1200: {
                slidesPerView: 2
            }
        }
    });
    
    /* -------------------------------------
           Team Slider 
     -------------------------------------- */
     var team_slider_one = new Swiper(".team-slider-one", {
        loop: true,
        spaceBetween: 25,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slidesPerView: 4,
        speed: 1500,
        navigation: {
        nextEl: ".team-one-next",
        prevEl: ".team-one-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1

            },
            768: {
                slidesPerView: 2

            },
            992: {
                slidesPerView: 3

            },
            1200: {
                slidesPerView: 4


            }
        }
    });
    /* -------------------------------------
           Blog Slider 
     -------------------------------------- */
    var blog_slider_one = new Swiper(".blog-slider-one", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        slidesPerView: 3,
        speed: 1500,
        navigation: {
            nextEl: ".blog-next",
            prevEl: ".blog-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1

            },
            768: {
                slidesPerView: 1.5,
                centeredSlides: true

            },
            992: {
                slidesPerView: 2

            },
            1200: {
                slidesPerView: 3

            }
        }
    });
    /* -------------------------------------
          Single Portfolio Slider 
    -------------------------------------- */
    var single_portfolio_slider = new Swiper(".single-portfolio-slider", {
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        slidesPerView: 1,
        speed: 1500,
        pagination: {
            el: ".single-portfolio-pagination",
            clickable: true,
        },
    });
    /* -------------------------------------
          Mobile Topbar 
    -------------------------------------- */

    $('.mobile-top-bar').on('click', function() {
        $('.header-top-right').addClass('open')
    });
    $('.close-header-top').on('click', function() {
        $('.header-top-right').removeClass('open')
    });

    /* -------------------------------------
          sticky Header
    -------------------------------------- */
    var wind = $(window);
    var sticky = $('.header-wrap');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    /*---------------------------------
        Responsive mmenu
    ---------------------------------*/
    $('.mobile-menu a').on('click', function() {
        $('.main-menu-wrap').addClass('open');
        $('.mobile-bar-wrap.style2 .mobile-menu').addClass('open');
    });

    $('.mobile_menu a').on('click', function() {
        $(this).parent().toggleClass('open');
        $('.main-menu-wrap').toggleClass('open');
    });

    $('.menu-close').on('click', function() {
        $('.main-menu-wrap').removeClass('open')
    });
    $('.mobile-top-bar').on('click', function() {
        $('.header-top').addClass('open')
    });
    $('.close-header-top button').on('click', function() {
        $('.header-top').removeClass('open')
    });
    var $offcanvasNav = $('.main-menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="las la-angle-down"></i></span>');

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if (($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('class').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('has-children')\b/)) {
            $this.toggleClass('menu-open');
        }
    });

    /*---------------------------------
         Scroll animation
    ----------------------------------*/
      AOS.init();
    /*-----------------------------------
         Scroll to top
    ----------------------------------*/

    // Show or hide the  button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(300)
            $('.back-to-top').addClass('open')
        } else {
            $('.back-to-top').fadeOut(300)
            $('.back-to-top').removeClass('open')
        }
    });


    //Animate the scroll to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

})(jQuery);

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();