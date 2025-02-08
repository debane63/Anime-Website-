document.getElementById("search").addEventListener("keyup", function() {
    let searchValue = this.value.toLowerCase();
    let animes = document.querySelectorAll(".anime");

    animes.forEach(anime => {
        let title = anime.querySelector("h2").innerText.toLowerCase();
        if (title.includes(searchValue)) {
            anime.style.display = "block";
        } else {
            anime.style.display = "none";
        }
    });
});
