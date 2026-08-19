/* =========================================================
   SHAMPAVE PORTFOLIO
   MASTER JAVASCRIPT
========================================================= */


/* =========================================================
   01. NAVIGATION
========================================================= */

const meButton = document.querySelector("#me");
const navMenu = document.querySelector("#nav-menu");


if (meButton && navMenu) {

    meButton.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });


    /* Close navigation when clicking outside */

    document.addEventListener("click", (event) => {

        const clickedInsideNav =
            navMenu.contains(event.target);

        const clickedMe =
            meButton.contains(event.target);


        if (
            !clickedInsideNav &&
            !clickedMe &&
            navMenu.classList.contains("open")
        ) {

            navMenu.classList.remove("open");

        }

    });

}


const currentPage =
    window.location.pathname
        .split("/")
        .pop() || "index.html";


const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    const linkPage =
        link.getAttribute("href");


    if (
        linkPage === currentPage
    ) {

        link.classList.add("active");

    }

});


/* =========================================================
   02. TYPEWRITER HEADINGS
========================================================= */

const typewriterHeadings =
    document.querySelectorAll(".typewriter-heading");


typewriterHeadings.forEach(heading => {

    if (
        document.documentElement.classList.contains(
            "reduce-motion"
        )
    ) {
        return;
    }


    const originalHTML =
        heading.innerHTML;


    const text =
        heading.textContent.trim();


    /*
        Create a hidden copy so we can preserve
        the original HTML/styling.
    */

    const temp =
        document.createElement("div");

    temp.innerHTML =
        originalHTML;


    /*
        Turn the original HTML into individual
        character spans.
    */

    function createCharacters(node) {

        const fragment =
            document.createDocumentFragment();


        node.childNodes.forEach(child => {

            if (
                child.nodeType ===
                Node.TEXT_NODE
            ) {

                [...child.textContent].forEach(
                    character => {

                        const span =
                            document.createElement(
                                "span"
                            );

                        span.textContent =
                            character;

                        span.classList.add(
                            "typewriter-char"
                        );

                        fragment.appendChild(
                            span
                        );

                    }
                );

            }

            else if (
                child.nodeType ===
                Node.ELEMENT_NODE
            ) {

                const element =
                    child.cloneNode(false);


                const children =
                    createCharacters(child);


                element.appendChild(
                    children
                );


                fragment.appendChild(
                    element
                );

            }

        });


        return fragment;

    }


    heading.innerHTML = "";


    const characters =
        createCharacters(temp);


    heading.appendChild(
        characters
    );


    const charElements =
        heading.querySelectorAll(
            ".typewriter-char"
        );


    charElements.forEach(char => {

        char.style.opacity = "0";

    });


    let current = 0;


    function typeNext() {

        if (
            current >=
            charElements.length
        ) {
            return;
        }


        charElements[
            current
        ].style.opacity = "1";


        current++;


        setTimeout(
            typeNext,
            70
        );

    }


    typeNext();

});


/* =========================================================
   03. SPARK EFFECT
========================================================= */

document.addEventListener("click", (event) => {

    createSparks(
        event.clientX,
        event.clientY
    );

});


function createSparks(x, y) {

    const amount = 12;


    for (let i = 0; i < amount; i++) {

        const spark =
            document.createElement("div");


        spark.classList.add("spark");


        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;


        const angle =
            Math.random() * Math.PI * 2;


        const distance =
            20 + Math.random() * 40;


        spark.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );


        spark.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );


        document.body.appendChild(spark);


        spark.addEventListener(
            "animationend",
            () => {
                spark.remove();
            }
        );

    }

}

/* =========================================================
   04. HOME PAGE PROJECT FILTER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");


    console.log(
        "Filter buttons:",
        filterButtons.length
    );

    console.log(
        "Project cards:",
        projectCards.length
    );


    if (!filterButtons.length || !projectCards.length) {
        return;
    }


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedFilter =
                button.dataset.filter.toLowerCase();


            /* -----------------------------------------
               ACTIVE BUTTON
            ----------------------------------------- */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            /* -----------------------------------------
               FILTER PROJECTS
            ----------------------------------------- */

            projectCards.forEach(card => {

                const categoryString =
                    card.dataset.category || "";


                const categories =
                    categoryString
                        .toLowerCase()
                        .trim()
                        .split(/\s+/);


                const shouldShow =
                    selectedFilter === "all" ||
                    categories.includes(selectedFilter);


                if (shouldShow) {

                    card.classList.remove(
                        "filter-hidden"
                    );

                } else {

                    card.classList.add(
                        "filter-hidden"
                    );

                }

            });

        });

    });

});

/* =========================================================
   05. HACKDAVIS CAROUSEL
========================================================= */

const hdSlides =
    document.querySelectorAll(".hd-slide");

const hdDots =
    document.querySelectorAll(".hd-dot");


if (
    hdSlides.length &&
    hdDots.length
) {

    let hdCurrentSlide = 0;


    function showHdSlide(index) {

        /* Loop forward */

        if (index >= hdSlides.length) {

            hdCurrentSlide = 0;

        }

        /* Loop backward */

        else if (index < 0) {

            hdCurrentSlide =
                hdSlides.length - 1;

        }

        else {

            hdCurrentSlide = index;

        }


        /* Hide every slide */

        hdSlides.forEach(slide => {

            slide.classList.remove("active");

        });


        /* Reset every dot */

        hdDots.forEach(dot => {

            dot.classList.remove("active");

        });


        /* Show selected slide */

        hdSlides[
            hdCurrentSlide
        ].classList.add("active");


        /* Activate selected dot */

        if (hdDots[hdCurrentSlide]) {

            hdDots[
                hdCurrentSlide
            ].classList.add("active");

        }

    }


    /* Dot navigation */

    hdDots.forEach(dot => {

        dot.addEventListener("click", () => {

            const slideNumber =
                Number(dot.dataset.slide);


            showHdSlide(slideNumber);

        });

    });


    /* Initial slide */

    showHdSlide(0);

}


/* =========================================================
   06. OP:EX CAROUSEL
========================================================= */

const opexSlides =
    document.querySelectorAll(".opex-slide");

const opexDots =
    document.querySelectorAll(".opex-dot");


if (
    opexSlides.length &&
    opexDots.length
) {

    let opexCurrentSlide = 0;


    function showOpexSlide(index) {

        /* Loop forward */

        if (index >= opexSlides.length) {

            opexCurrentSlide = 0;

        }

        /* Loop backward */

        else if (index < 0) {

            opexCurrentSlide =
                opexSlides.length - 1;

        }

        else {

            opexCurrentSlide = index;

        }


        /* Hide slides */

        opexSlides.forEach(slide => {

            slide.classList.remove("active");

        });


        /* Reset dots */

        opexDots.forEach(dot => {

            dot.classList.remove("active");

        });


        /* Show current */

        opexSlides[
            opexCurrentSlide
        ].classList.add("active");


        /* Activate current dot */

        if (opexDots[opexCurrentSlide]) {

            opexDots[
                opexCurrentSlide
            ].classList.add("active");

        }

    }


    /* Dot navigation */

    opexDots.forEach(dot => {

        dot.addEventListener("click", () => {

            const slideNumber =
                Number(dot.dataset.slide);


            showOpexSlide(slideNumber);

        });

    });


    /* Initial slide */

    showOpexSlide(0);

}


/* =========================================================
   07. GENERIC CAROUSEL
========================================================= */

/*
    This lets you create additional carousels without
    writing new JavaScript every time.

    HTML:

    <div class="carousel" data-carousel>

        <div class="carousel-slides">

            <img
                src="image1.jpg"
                class="carousel-slide active"
            >

            <img
                src="image2.jpg"
                class="carousel-slide"
            >

        </div>

        <div class="carousel-dots">

            <button
                class="carousel-dot active"
                data-slide="0"
            ></button>

            <button
                class="carousel-dot"
                data-slide="1"
            ></button>

        </div>

    </div>
*/


const genericCarousels =
    document.querySelectorAll(
        "[data-carousel]"
    );


genericCarousels.forEach(carousel => {

    const slides =
        carousel.querySelectorAll(
            ".carousel-slide"
        );


    const dots =
        carousel.querySelectorAll(
            ".carousel-dot"
        );


    if (!slides.length) {
        return;
    }


    let currentSlide = 0;


    function showSlide(index) {

        if (index >= slides.length) {

            currentSlide = 0;

        }

        else if (index < 0) {

            currentSlide =
                slides.length - 1;

        }

        else {

            currentSlide = index;

        }


        slides.forEach(slide => {

            slide.classList.remove("active");

        });


        dots.forEach(dot => {

            dot.classList.remove("active");

        });


        slides[
            currentSlide
        ].classList.add("active");


        if (dots[currentSlide]) {

            dots[
                currentSlide
            ].classList.add("active");

        }

    }


    dots.forEach(dot => {

        dot.addEventListener("click", () => {

            showSlide(
                Number(dot.dataset.slide)
            );

        });

    });


    showSlide(0);

});


/* =========================================================
   08. CASE STUDY IMAGE LIGHTBOX
========================================================= */

/*
    Add:

    class="lightbox-image"

    to any image you want to enlarge.

    Example:

    <img
        src="imgs/project.jpg"
        class="lightbox-image"
    >

    Clicking the image opens it fullscreen.
*/


const lightboxImages =
    document.querySelectorAll(
        ".lightbox-image"
    );


if (lightboxImages.length) {

    /* Create lightbox */

    const lightbox =
        document.createElement("div");


    lightbox.className =
        "image-lightbox";


    lightbox.innerHTML = `

        <button
            class="lightbox-close"
            aria-label="Close image"
        >
            ×
        </button>

        <img
            class="lightbox-content"
            src=""
            alt=""
        >

    `;


    document.body.appendChild(lightbox);


    const lightboxContent =
        lightbox.querySelector(
            ".lightbox-content"
        );


    const lightboxClose =
        lightbox.querySelector(
            ".lightbox-close"
        );


    /* Open */

    lightboxImages.forEach(image => {

        image.addEventListener("click", () => {

            lightboxContent.src =
                image.src;

            lightboxContent.alt =
                image.alt;


            lightbox.classList.add("open");

            document.body.classList.add(
                "lightbox-open"
            );

        });

    });


    /* Close button */

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );


    /* Click background */

    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );


    /* Escape key */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains("open")
            ) {

                closeLightbox();

            }

        }
    );


    function closeLightbox() {

        lightbox.classList.remove("open");

        document.body.classList.remove(
            "lightbox-open"
        );

    }

}


/* =========================================================
   09. PLAY PAGE HOVER CAPTIONS
========================================================= */

/*
    Expected HTML:

    <div class="play-item">

        <img src="imgs/image.jpg">

        <div class="play-caption">

            <span>2026</span>

            <p>
                A little description.
            </p>

        </div>

    </div>
*/


const playItems =
    document.querySelectorAll(
        ".play-item"
    );


playItems.forEach(item => {

    item.addEventListener(
        "mouseenter",
        () => {

            item.classList.add("hovered");

        }
    );


    item.addEventListener(
        "mouseleave",
        () => {

            item.classList.remove("hovered");

        }
    );

});


/* =========================================================
   10. PLAY PAGE IMAGE TILT
========================================================= */

/*
    Optional.

    Add:

    data-tilt

    to a play item.

    Example:

    <div
        class="play-item"
        data-tilt
    >
*/


const tiltItems =
    document.querySelectorAll(
        "[data-tilt]"
    );


tiltItems.forEach(item => {

    item.addEventListener(
        "mousemove",
        event => {

            const rect =
                item.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -3;


            const rotateY =
                ((x - centerX) / centerX) * 3;


            item.style.transform = `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;

        }
    );


    item.addEventListener(
        "mouseleave",
        () => {

            item.style.transform =
                "perspective(800px) rotateX(0) rotateY(0)";

        }
    );

});


/* =========================================================
   11. SCROLL REVEAL
========================================================= */

/*
    Any element with:

        class="reveal"

    will fade upward when it enters the viewport.
*/


const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (
    revealElements.length &&
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}


/* =========================================================
   12. CASE STUDY NEXT PROJECT
========================================================= */

/*
    Adds a subtle click interaction to the
    next-project section if present.
*/


const nextProject =
    document.querySelector(
        ".case-next"
    );


if (nextProject) {

    nextProject.addEventListener(
        "mouseenter",
        () => {

            nextProject.classList.add(
                "hovered"
            );

        }
    );


    nextProject.addEventListener(
        "mouseleave",
        () => {

            nextProject.classList.remove(
                "hovered"
            );

        }
    );

}


/* =========================================================
   13. SMOOTH ANCHOR LINKS
========================================================= */

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchorLinks.forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetID =
                link.getAttribute("href");


            if (
                !targetID ||
                targetID === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetID
                );


            if (!target) {

                return;

            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================================
   14. IMAGE LOADING
========================================================= */

/*
    Adds a "loaded" class when images finish loading.
    Useful for subtle image transitions.
*/


const allImages =
    document.querySelectorAll("img");


allImages.forEach(image => {

    if (image.complete) {

        image.classList.add("loaded");

    }

    else {

        image.addEventListener(
            "load",
            () => {

                image.classList.add(
                    "loaded"
                );

            }
        );

    }

});


/* =========================================================
   15. KEYBOARD ACCESSIBILITY
========================================================= */

/*
    Allows the nav button to work with Enter / Space.
*/


if (meButton) {

    meButton.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                meButton.click();

            }

        }
    );

}


/* =========================================================
   16. REDUCE MOTION
========================================================= */

/*
    Respect users who have requested reduced motion.
*/


const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (prefersReducedMotion) {

    document.documentElement.classList.add(
        "reduce-motion"
    );

}


/* =========================================================
   17. DEBUG / STATUS
========================================================= */

console.log(
    "shampave portfolio loaded ✦"
);
