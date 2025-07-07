
$(function () {
    /**
     * ===============================================
     *      TABLE OF CONTENT
     * ===============================================
     * # Loader
     * # Real Time
     * # Real Time Weather
     * # Popup Menu
     * # Gsap Smooth Scroll
     * # Experience Popup
     * # Custom Cursor
     *
     */


    /* ===== Loader ===== */
    $(window).on('load', function () {
        setTimeout(() => {
            $('.preloader-wrap').delay('500').fadeOut(1000);
            scroll_animations();
        }, 200);
        setTimeout(() => {
            $('.hero-sec .hero-footer-wrap.scroll-from-bottom').addClass('animated');
        }, 800);
    });



    /* ===== Real Time ===== */
    if ($('#realtime').length) {
        startTime();
    }
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('realtime').innerHTML =
            h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
    }
    function checkTime(i) {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }


    /* ===== Real Time Weather ===== */
    const apiKey = '1906ccd7aa6d7c3683f1b293ee212f01';
    const city = 'sylhet';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const latitude = data.coord.lat;
            const longitude = data.coord.lon;

            // Format latitude
            const latDegrees = Math.floor(latitude);
            const latMinutes = Math.floor((latitude - latDegrees) * 60);
            const latSeconds = ((latitude - latDegrees) * 60 - latMinutes) * 60;

            // Format longitude
            const lonDegrees = Math.floor(longitude);
            const lonMinutes = Math.floor((longitude - lonDegrees) * 60);
            const lonSeconds = ((longitude - lonDegrees) * 60 - lonMinutes) * 60;

            // document.getElementById('temperature').textContent = `${temperature}°C`;
            document.getElementById('coordinates').textContent = `${latDegrees}° ${latMinutes}' ${latSeconds.toFixed(4)}" N`; //, ${lonDegrees}° ${lonMinutes}' ${lonSeconds.toFixed(4)}" E
        })
        .catch(error => {
            console.log('Error fetching data:', error);
        });



        /* ===== Popup Menu ===== */
        $(document).on('click', '.header-wrap .header-right .theme-btn', function (e) {
            e.preventDefault();
            $('.popup-menu-wrap').addClass('active');
        });

        $(document).on('click', '.popup-menu-close-btn .icon', function () {
            $('.popup-menu-wrap').removeClass('active');
        });


    



    /* ===== # Gsap Smooth Scroll ===== */
    // gsap.config({ trialWarn: false });
    // console.clear();
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // let smoother = ScrollSmoother.create({ smooth: 2 });

    // let masks;

    // ScrollTrigger.create({
    //     trigger: "#smooth-content", // Change trigger to .line instead of .line span
    //     start: "top bottom",
    //     end: "bottom bottom",
    //     refreshPriority: -1,
    //     scrub: 5 // Adjust this value to control animation speed (higher value for slower animation)
    // });

    // const btt = document.querySelector("#back-to-top");

    // btt.addEventListener("click", () => gsap.to(window, { scrollTo: 0 }));
    // gsap.set(btt, { y: 50 });

    // gsap.to(btt, {
    //     y: 0,
    //     autoAlpha: 1,
    //     scrollTrigger: {
    //         trigger: "body",
    //         start: "top -20%",
    //         end: "top -20%",
    //         toggleActions: "play none reverse none"
    //     }
    // });








    window.addEventListener('scroll', {
        scroll_animations
    });



    // $(window).scroll(function () {
    //     var windscroll = $(window).scrollTop();

    // }).scroll();



    // window.addEventListener("load", function() {
    //     // Add event listener for scroll
    //     window.addEventListener("scroll", function() {
    //     //   var stickyStatement = document.querySelector('.sticky-statement');
    //       stickyEls2.forEach((panel, i) => {
    //         var stickyPosition = panel.offsetTop;
    //         var scrollPosition = window.scrollY;
        
    //         // Add or remove 'sticky' class based on scroll position
    //         if (scrollPosition >= stickyPosition) {
    //             panel.classList.add('sticky');
    //         } else {
    //             panel.classList.remove('sticky');
    //         }
    //         })
    //     });
    //   });
      


    // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // var container = document.querySelector("#smooth-content");

    // var height;
    // function setHeight() {
    //     height = container.clientHeight;

    //     document.body.style.height = height + "px";
    // }
    // ScrollTrigger.addEventListener("refreshInit", setHeight);

    // gsap.to(container, {
    //     y: () => -(height - document.documentElement.clientHeight),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: container,
    //         start: "top top",
    //         end: "bottom bottom",
    //         scrub: 1,
    //         invalidateOnRefresh: true,
    //     }
    // });




    // New Scroll start
    // function initSmoothScroll() {
    //     var html = document.documentElement;
    //     var body = document.body;

    //     var scroller = {
    //         target: document.querySelector("#smooth-content"),
    //         ease: 0.05, // <= scroll speed
    //         endY: 0,
    //         y: 0,
    //         resizeRequest: 1,
    //         scrollRequest: 0,
    //     };

    //     var requestId = null;

    //     TweenLite.set(scroller.target, {
    //         rotation: 0.01,
    //         force3D: true
    //     });

    //     window.addEventListener("load", onLoad);

    //     function onLoad() {    
    //         updateScroller();  
    //         window.focus();
    //         window.addEventListener("resize", onResize);
    //         document.addEventListener("scroll", onScroll); 
    //     }

    //     function updateScroller() {
        
    //         var resized = scroller.resizeRequest > 0;
                
    //         if (resized) {    
    //             var height = scroller.target.clientHeight;
    //             body.style.height = height + "px";
    //             scroller.resizeRequest = 0;
    //         }
                
    //         var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    //         scroller.endY = scrollY;
    //         scroller.y += (scrollY - scroller.y) * scroller.ease;

    //         if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    //             scroller.y = scrollY;
    //             scroller.scrollRequest = 0;
    //         }
            
    //         TweenLite.set(scroller.target, { 
    //             y: -scroller.y 
    //         });
            
    //         requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    //     }

    //     function onScroll() {
    //         scroller.scrollRequest++;
    //         if (!requestId) {
    //             requestId = requestAnimationFrame(updateScroller);
    //         }
    //     }

    //     function onResize() {
    //         scroller.resizeRequest++;
    //         if (!requestId) {
    //             requestId = requestAnimationFrame(updateScroller);
    //         }
    //     }
            
    // }
    // initSmoothScroll();
    // New Scroll End


    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    //     $("#smooth-content").style.transform = 'translate3d(0px, 0px, 0px)';
    // }


    // Transform Text Anim Start

    // function ShowcaseOverlapping() {
		
        
    //     gsap.utils.toArray('#smooth-content').forEach((pinnedSection) => {
            
    //         const transformTextsAnim = pinnedSection.querySelectorAll('.sticky-statement2');
            
    //         function setImagesProperties() {								
    //             gsap.set(transformTextsAnim, { height: window.innerHeight});	
    //         }
            
    //         setImagesProperties();
            
    //         window.addEventListener('resize', setImagesProperties);	
        
    //         transformTextsAnim.forEach((transformTextAnim, i, arr) => {
    //                 const durationMultiplier = arr.length - i - 1;
                    
                    
    //                 ScrollTrigger.create({
    //                     trigger: transformTextAnim,
    //                     start: function() {
    //                         const centerPin = (window.innerHeight - transformTextAnim.offsetHeight) / 2;
    //                         return "top +=" + centerPin;
    //                     },
    //                     end: function() {
    //                         const durationHeight = transformTextAnim.offsetHeight * durationMultiplier + (transformTextAnim.offsetHeight - transformTextAnim.offsetHeight)/2;
    //                         return "+=" + durationHeight;
    //                     },
    //                     pin: true,
    //                     pinSpacing: false,
    //                     scrub: true,
    //                 });
                    
    //                 const animationProperties = {
    //                     y: 500,
    //                     scale: 0.65,
    //                     opacity: 0,
    //                     zIndex: 0,
    //                     duration: 0.05,
    //                     ease: 0.05,
    //                     // ease: Linear.easeNone
    //                 };
                    
    //                 // animationProperties.filter = "blur(10px)";
                    
    //                 ScrollTrigger.create({
    //                     trigger: transformTextAnim,
    //                     start: function() {
    //                         const centerPin = (window.innerHeight - transformTextAnim.offsetHeight) / 2;
    //                         console.log('center pin' , centerPin);
    //                         return "top top";
    //                     },
    //                     end: function() {
    //                         const durationHeight = transformTextAnim.offsetHeight + (transformTextAnim.offsetHeight - transformTextAnim.offsetHeight) / 2;
    //                         return "+=" + durationHeight;
    //                     },
    //                     scrub: true,
    //                     animation: gsap.to(transformTextAnim, animationProperties),
    //                 });

    //         });
        
    //     });
		
	// }
    // ShowcaseOverlapping();
    // Transform Text Anim End





    // window.addEventListener('scroll', {
    //     scroll_animations,
    // });


    // Array.prototype.slice.call(document.querySelectorAll(".page-section")).forEach(function (e, t) {
    //     ScrollTrigger.create({
    //         trigger: e,
    //         id: t + 1,
    //         start: "top center",
    //         end: function () {
    //             return "+=".concat(e.clientHeight - 30);
    //         },
    //         toggleActions: "play reverse none reverse",
    //         toggleClass: { targets: e, className: "active" },
    //         onToggle: function () {

    //         },
    //     });
    // });



    /* ===== # Experience Popup ===== */
    $(document).on('click', '.experience-box .experience-button-box .experience-button', function (e) {
        e.preventDefault();
        $('.experience-popup').addClass('active');
    });
    $(document).on('click', '.experience-popup .experience-popup-content-wrap .close-experience-popup-btn', function () {
        $('.experience-popup').removeClass('active');
    });


    /* ==== # Custom Cursor ===== */
    const cursorBall = document.getElementById('ball');

    document.addEventListener('mousemove', function (e) {
        // Update cursor position and opacity on mousemove
        gsap.to(cursorBall, {
            duration: 0.3,
            x: e.clientX,
            y: e.clientY,
            opacity: 1, // Ensure cursor is visible
            ease: 'power2.out'
        });
    });

    // Hover effect on elements
    const hoverElements = document.querySelectorAll('a');
    hoverElements.forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            // Animate cursorBall on mouseenter
            cursorBall.classList.add('hovered');
            gsap.to(cursorBall, {
                duration: 0.3,
                scale: 2, // Increase scale
                opacity: 0, // Set opacity to 0
                ease: 0.1
            });
        });

        element.addEventListener('mouseleave', function () {
            // Restore cursorBall on mouseleave
            cursorBall.classList.remove('hovered');
            gsap.to(cursorBall, {
                duration: 0.3,
                scale: 1, // Restore scale to normal
                opacity: 1, // Restore opacity
                ease: 'power2.out'
            });
        });
    });




        


});



function scroll_animations() {
    // var allow_on_mobile = !0;
    // if (typeof config_scroll_animation_on_mobile !== "undefined") allow_on_mobile = config_scroll_animation_on_mobile;
    // if (allow_on_mobile == !1 && is_mobile_device) return;
    var defaults = {
        ease: 0.05,
        animation: "fade_from_bottom",
        once: !1,
    };
    gsap.utils.toArray(".scroll-animation").forEach(function (box) {
        var gsap_obj = {};
        var settings = {
            // ease: box.dataset.animationEase || defaults.ease,
            duration: box.dataset.animationDuration || defaults.duration,
        };
        var animations = {
            slide_up: {
                y: -180,
            },
            slide_down: {
                y: 180,
            },
            slide_up2: {
                y: -100,
            },
            slide_down2: {
                y: 100,
            },
            fade_from_bottom: {
                y: 180,
                opacity: 0,
            },
            fade_from_top: {
                y: -180,
                opacity: 0,
            },
            fade_from_left: {
                x: -180,
                opacity: 0,
            },
            fade_from_right: {
                x: 180,
                opacity: 0,
            },
            fade_in: {
                opacity: 0,
            },
            rotate_up: {
                y: 180,
                rotation: 10,
                opacity: 0,
            },
            bronx_zoom_out: {
                scale: 2,
            },
            slide_and_scale: {
                // y: 180,
                scale: 1,
                opacity: 1
            },
        };
        var globalWidth = window.innerWidth;
        if (globalWidth > 809) {
            var transWidth = '10%';
        } else {
            var transWidth = '30%';
        }
        var scroll_trigger = {
            scrollTrigger: {
                trigger: box,
                once: defaults.once,
                // start: "top bottom+=20%",
                start: "top bottom+="+transWidth,
                toggleActions: "play none none reverse",
                markers: !1,
                onUpdate: function(self) {
                    // Get the current position of the box relative to the viewport
                    // var bounding = box.getBoundingClientRect();
                    // var offsetTopFromViewport = bounding.top;

                    
                    // if (box.dataset.animation == 'slide_and_scale') {
                    //     console.log("Offset from top:", offsetTopFromViewport);

                    //     // Example: Toggle opacity and scale based on offset
                    //     if (offsetTopFromViewport < 0) {
                    //         const replaceVal = Math.abs(offsetTopFromViewport);
                    //         console.log(replaceVal, 'if');
                    //         // box.style.transform = `translateY(${replaceVal}px)`;
                    //         gsap.to(box, { y: replaceVal, duration: 0.5 });
                    //     } else {
                    //         console.log('else');
                    //         // box.style.transform = `translateY(0px)`;
                    //         gsap.to(box, { y: 0, duration: 0.5 });
                    //     }
                    // }
                }
            },
        };
        if (box.dataset.animation == 'bronx_zoom_out') {
            scroll_trigger = {
                scrollTrigger: {
                    trigger: box,
                    once: defaults.once,
                    // start: "top bottom+=20%",
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                    markers: !1,
                },
            };
        }
        jQuery.extend(gsap_obj, settings);
        jQuery.extend(gsap_obj, animations[box.dataset.animation || defaults.animation]);
        jQuery.extend(gsap_obj, scroll_trigger);
        gsap.from(box, gsap_obj);
    });
}