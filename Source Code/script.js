var count = localStorage.getItem("visitorCount");
if (count === null) {
    count = 1;
} else {
    count = parseInt(count) + 1;
}
localStorage.setItem("visitorCount", count);
document.getElementById("visitorCount").textContent = count;

function filter(name) {
    let btns = document.querySelectorAll(".tabs button");
    for (let j = 0; j < btns.length; j++) {
        btns[j].classList.remove("active");
        if (btns[j].innerText.toLowerCase().includes(name)) {
            btns[j].classList.add("active");
        }
    }

    let cards = document.getElementsByClassName("box");
    for (let i = 0; i < cards.length; i++) {
        if (name == "all" || cards[i].classList.contains(name)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

let params = new URLSearchParams(window.location.search);
let cat = params.get("category");
if (cat) {
    filter(cat);
}
