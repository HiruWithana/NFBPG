document.addEventListener("DOMContentLoaded", function () {
    // Add this class to the body when the page starts loading
    document.body.classList.add('preloading');

    const counter3 = document.querySelector(".counter-3");

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
            const div = document.createElement("div");
            div.className = "num";
            div.textContent = j;
            counter3.appendChild(div);
        }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);

    function animate(counter, duration, delay = 0) {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut",
        });
    }

    animate(counter3, 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);

    gsap.to(".loading-screen", {
        scale: 0.4,
        duration: 1.5,
        delay: 6.5,
        ease: "power1.inOut",
    });

    gsap.to(".loading-screen", {
        yPercent: 100,
        duration: 1,
        delay: 8.2,
        ease: "power1.inOut",
        onComplete: function () {
            document.querySelector(".loading-screen").style.display = "none";
            document.body.classList.remove('preloading'); // Remove the class when preloader is hidden
        }
    });

    gsap.from(".title > span", 1.5, {
        delay: 8.2,
        y: 50,
        stagger: 0.2,
        opacity: 0,
        ease: "power4.inOut",
    });
});
