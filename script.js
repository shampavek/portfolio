const title = document.querySelector("h1");
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

        // Random direction
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 40;

        spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        spark.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

        document.body.appendChild(spark);

        spark.addEventListener("animationend", () => {
            spark.remove();
        });
    }
}

