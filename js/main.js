(function() {

    jQuery(document).ready(function() {

        $(".slider-wraper").camera({

            pagination: false,
            playPause: false,
            time: 50000,
            loader: "none",

            onEndTransition: function() {

                $(".camera_caption").addClass("slideInRight animated").show("fast");

            },

            onStartTransition: function() {

                $(".camera_caption").removeClass("slideInLeft animated").hide("fast");
            }
        });
        // mobile slider arrow

        function mobile_slide_arrow() {

            var winWidth = $(window).width();

            if (winWidth <= 768) {

                $(".camera_prev, .camera_next").css({
                    "opacity": 1
                });
            }

            if (winWidth <= 450) {

                $(".camera_prev, .camera_next").css({
                    "opacity": 0
                });

            }

        }

        mobile_slide_arrow();

        $(window).resize(function() {

            mobile_slide_arrow();
        });

        $(window)
            // For Modal 


        $(".screen-img a").on("click", function() {

            $("#modal img").attr("src", $(this).attr("data-image-url"));
        });

        function scrollmenu() {

            $(window).scroll(function() {


                var scrollTopOffset = $(".top-menu").offset();

                if (scrollTopOffset.top >= 500) {

                    $("nav").addClass("animation-effect");
                }

                var scrollHeight = $(window).scrollTop();

                if (scrollHeight >= 500) {

                    $("nav").addClass("animation-effect");

                } else {

                    $("nav").removeClass("animation-effect");
                }
            });

        }

        scrollmenu();
        // Smooth Scroll

        smoothScroll.init({

            speed: 900,
            easing: "easeInOutQuad",
            offset: 5
        });


        function content_animation() {

            $("#about .blue-circle").waypoint(function() {

                $(this.element).addClass("animated fadeInUp")
            }, {

                offset: "2%"
            });
            $("#feature .blue-circle").waypoint(function() {

                $(this.element).addClass("animated fadeInUp animation4")
            }, {

                offset: "50%"
            });

            $(".feature-img-area img").waypoint(function() {

                $(this.element).addClass("animated lightSpeedIn")
            }, {
                offset: "50%"
            });

            $(".screen-img").waypoint(function() {

                $(this.element).addClass("animated zoomInUp").show();
                $(this.element).css({
                    "opacity": 1
                });


            }, {
                offset: "50%"
            });

            $(".download-content .phone").waypoint(function() {

                $(this.element).addClass("animated fadeInRight animation3");
            }, {
                offset: "50%"
            });
            $(".download-content .download-links").waypoint(function() {

                $(this.element).addClass("animated fadeInDown animation6");
            }, {
                offset: "50%"
            });

            $(".download-content .download-right").waypoint(function() {

                $(this.element).addClass("animated fadeInLeft animation5");
            }, {
                offset: "50%"
            });
        }

        content_animation();


    });

}(jQuery));