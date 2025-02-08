document.getElementById("search").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    let cards = document.querySelectorAll(".anime-card");

    cards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
