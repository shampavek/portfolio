/* =========================
   NAVBAR
========================= */

const meButton = document.querySelector("#me");
const navMenu = document.querySelector("#nav-menu");

if (meButton && navMenu) {
    meButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}


/* =========================
   TYPEWRITER
========================= */

const title = document.querySelector("h1");

if (title) {
    const text = title.textContent;
    title.textContent = "";

    let i = 0;

    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, 70);
        }
    }

    type();
}


/* =========================
   SPARKS
========================= */

document.addEventListener("click", (e) => {
    createSparks(e.clientX, e.clientY);
});

function createSparks(x, y) {
    const amount = 12;

    for (let i = 0; i < amount; i++) {
        const spark = document.createElement("div");

        spark.classList.add("spark");

        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;

        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 40;

        spark.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        spark.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );

        document.body.appendChild(spark);

        spark.addEventListener("animationend", () => {
            spark.remove();
        });
    }
}


/* =========================
   FILTERS + RANDOM ORDER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const caseStudiesContainer = document.querySelector(".casestoodies");

const caseStudies = Array.from(
    document.querySelectorAll(".csfeatures")
);


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        let filtered = caseStudies.filter(card => {

            const categories =
                card.dataset.category.split(" ");

            return (
                filter === "all" ||
                categories.includes(filter)
            );

        });

        // Randomize order
        shuffle(filtered);

        // Hide all
        caseStudies.forEach(card => {
            card.style.display = "none";
        });

        // Show in randomized order
        filtered.forEach(card => {
            card.style.display = "flex";
            caseStudiesContainer.appendChild(card);
        });

    });

});

/* =========================
   HACKDAVIS CAROUSEL
========================= */

const hdSlides = document.querySelectorAll(".hd-slide");
const hdDots = document.querySelectorAll(".hd-dot");

if (hdSlides.length && hdDots.length) {

    let hdCurrentSlide = 0;

    function showHdSlide(index) {

        if (index >= hdSlides.length) {
            hdCurrentSlide = 0;
        } else if (index < 0) {
            hdCurrentSlide = hdSlides.length - 1;
        } else {
            hdCurrentSlide = index;
        }

        hdSlides.forEach(slide => {
            slide.classList.remove("active");
        });

        hdDots.forEach(dot => {
            dot.classList.remove("active");
        });

        hdSlides[hdCurrentSlide].classList.add("active");
        hdDots[hdCurrentSlide].classList.add("active");
    }

    hdDots.forEach(dot => {
        dot.addEventListener("click", () => {
            showHdSlide(Number(dot.dataset.slide));
        });
    });

    showHdSlide(0);
}


/* =========================
   OP:EX CAROUSEL
========================= */

const opexSlides = document.querySelectorAll(".opex-slide");
const opexDots = document.querySelectorAll(".opex-dot");

if (opexSlides.length && opexDots.length) {

    let opexCurrentSlide = 0;

    function showOpexSlide(index) {

        if (index >= opexSlides.length) {
            opexCurrentSlide = 0;
        } else if (index < 0) {
            opexCurrentSlide = opexSlides.length - 1;
        } else {
            opexCurrentSlide = index;
        }

        opexSlides.forEach(slide => {
            slide.classList.remove("active");
        });

        opexDots.forEach(dot => {
            dot.classList.remove("active");
        });

        opexSlides[opexCurrentSlide].classList.add("active");
        opexDots[opexCurrentSlide].classList.add("active");
    }

    opexDots.forEach(dot => {
        dot.addEventListener("click", () => {
            showOpexSlide(Number(dot.dataset.slide));
        });
    });

    showOpexSlide(0);
}