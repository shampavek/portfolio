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
   FILTERS
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const caseStudies = document.querySelectorAll(".csfeatures");

if (filterButtons.length > 0) {

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const filter = button.dataset.filter;

            caseStudies.forEach(card => {

                const categories =
                    card.dataset.category.split(" ");

                if (
                    filter === "all" ||
                    categories.includes(filter)
                ) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });

}


/* =========================
   OP: EX CAROUSEL
========================= */

const slides = document.querySelectorAll(".opex-slide");
const dots = document.querySelectorAll(".carousel-dots .dot");

if (slides.length > 0 && dots.length > 0) {

    let currentSlide = 0;

    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    dots.forEach(dot => {

        dot.addEventListener("click", () => {
            showSlide(Number(dot.dataset.slide));
        });

    });

    showSlide(0);
}