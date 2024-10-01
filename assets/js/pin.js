gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 768) {


    ScrollTrigger.create({
        trigger: ".about-right",
        start: "top top",
        end: "bottom bottom",
        pin: ".pin-img",
        markers: false
    });

    ScrollTrigger.create({
        trigger: ".blogContent",
        start: "top 18%",
        end: "bottom bottom",
        pin: ".blogCard",
        markers: false
    });
}
