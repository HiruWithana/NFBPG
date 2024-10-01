document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);



    function splitTextIntoSpans(selector) {
        var element = document.querySelector(selector);

        if (element) {
            var text = element.innerText;
            var splitText = text
                .split("")
                .map((char) => `<span>${char}</span>`)
                .join("");

            element.innerHTML = splitText;
        }
    }

    // create
    let mm = gsap.matchMedia();








    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)





    mm.add("(min-width: 800px)", () => {
        // Scale down the background image of the landingSection
        gsap.to(".landingSection",
            {
                // opacity: 0,
                scale:0.9,
                ease: "none",
                scrollTrigger: {
                    trigger: ".landingSection",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: true,
                }
            }
        );

    });



    gsap.to(".heroContent", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: ".landingSection",
            start: "bottom bottom",
            end: "bottom center",
            scrub: true,
        }
    });






splitTextIntoSpans(".heroTitle");
splitTextIntoSpans(".largeTxt1");
splitTextIntoSpans(".largeTxt2");



// single span animation | hero title
gsap.from(".heroTitle span",
    {
       opacity:0,
        ease: "power3.out",
        duration:2,
        stagger:0.01,
        scrollTrigger: {
            trigger: ".heroContent",
            start: "top 60%",
            end: "bottom top",
            markers:false
        }
    }
);


// single span animation | sub hero
gsap.from(".largeTxt1 span",
    {
       opacity:0,
        ease: "power3.out",
        duration:2,
        stagger:0.01,
        scrollTrigger: {
            trigger: ".largeTxt1",
            start: "top center",
            end: "bottom center",
            markers:false
        }
    }
);

// single span animation | largeTxt2
gsap.from(".largeTxt2 span",
    {
       opacity:0,
        ease: "power3.out",
        duration:2,
        stagger:0.01,
        scrollTrigger: {
            trigger: ".largeTxt2",
            start: "top center",
            end: "bottom center",
            markers:false
        }
    }
);



gsap.fromTo(".float-img1",
    {
        rotate: "10deg",
        opacity:0,
    },
    {
        rotate: "0deg",
        opacity:1,
        delay:1,
        duration: 2,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
            trigger: ".subHero",
            start: "top center",
            end: "bottom top",
            toggleActions: "play none none reverse",
            markers: false,
        }
    }
);


gsap.fromTo(".float-img2",
    {
        rotate: "10deg",
        scale:0,
    },
    {
        rotate: "0deg",
        scale:1,
        duration: 2,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
            trigger: ".infoGrid",
            start: "top 60%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            markers: false,
        }
    }
);

gsap.fromTo(".float-img3",
    {
        rotate: "10deg",
        scale:0,
    },
    {
        rotate: "0deg",
        scale:1,
        duration: 2,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
            trigger: ".blogSection",
            start: "top 60%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            markers: false,
        }
    }
);

















    // Create a timeline for the stagger effect
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.swiper-wrapper',
            start: 'top 85%',
            end: 'center 60%',
            scrub: true,
            markers: false
        }
    });

    // Add slides to the timeline with stagger
    tl.from('.swiper-slide', {
        y: 300,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2
    });













});
