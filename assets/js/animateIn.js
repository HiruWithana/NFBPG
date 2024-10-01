// animateIn

let animateInElements = document.querySelectorAll(".animateIn");

animateInElements.forEach((el, index) => {
    let delayTime = 0; // Default delay time

    // Check for delay class using regex
    el.classList.forEach(className => {
        let match = className.match(/^delay-(\d+)$/);
        if (match) {
            delayTime = parseInt(match[1]) / 10; // Convert to seconds
        }
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            markers: false,
            toggleActions: "play none none reverse"
        }
    });

    tl.from(el, {
        y: 25,
        opacity: 0,
        duration: 1.25,
        ease: "elastic.out(1, 0.75)", // Use elastic ease for bounce effect
        delay: delayTime
    });
});











// hr animation

let animateHrElements = document.querySelectorAll(".animateHr");

animateHrElements.forEach((el) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            markers: false,
            toggleActions: "play none none reverse"
        }
    });

    tl.fromTo(el,
        { width: "0%" },
        { width: "75%", duration: 1 }
    );
});
