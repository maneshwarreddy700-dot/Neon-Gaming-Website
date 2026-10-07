// =========================================================
// NEON GAMEHUB JAVASCRIPT
// =========================================================


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

    });

}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

    });

});


// ================= GAME SEARCH =================

const searchInput =
    document.getElementById("searchInput");

const gameCards =
    document.querySelectorAll(".game-card");

const filterButtons =
    document.querySelectorAll(".filter-btn");

let currentFilter = "all";


function filterGames() {

    const searchText =
        searchInput.value.toLowerCase().trim();


    gameCards.forEach((card) => {

        const gameName =
            card.dataset.name.toLowerCase();

        const category =
            card.dataset.category;

        const matchesSearch =
            gameName.includes(searchText);

        const matchesFilter =
            currentFilter === "all" ||
            category === currentFilter;


        if (matchesSearch && matchesFilter) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// Search while typing

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterGames
    );

}


// ================= CATEGORY FILTER =================

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentFilter =
            button.dataset.filter;

        filterGames();

    });

});


// ================= GAME MODAL =================

const gameModal =
    document.getElementById("gameModal");

const modalTitle =
    document.getElementById("modalTitle");


function showGame(gameName) {

    modalTitle.textContent =
        gameName.toUpperCase();

    gameModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeGame() {

    gameModal.classList.remove("show");

    document.body.style.overflow = "";

}


// Close modal when clicking outside

if (gameModal) {

    gameModal.addEventListener("click", (event) => {

        if (event.target === gameModal) {

            closeGame();

        }

    });

}


// Close modal with Escape key

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeGame();

    }

});


// ================= MOUSE GLOW =================

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;

    document.body.style.setProperty(
        "--mouse-x",
        `${x}px`
    );

    document.body.style.setProperty(
        "--mouse-y",
        `${y}px`
    );

});


// ================= CONSOLE MESSAGE =================

console.log(
    "⚡ NEON GAMEHUB ONLINE"
);

console.log(
    "🎮 System ready. Game on!"
);
