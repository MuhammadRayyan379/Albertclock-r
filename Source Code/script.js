var count = localStorage.getItem("visitorCount");
if (count === null) {
    count = 1;
} else {
    count = parseInt(count);
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

let watchData = {
    "Omega": { move: "Mechanical Automatic", water: "100m", year: "1968", war: "2 Years" },
    "Longines": { move: "Manual Hand-Wind", water: "50m", year: "1972", war: "2 Years" },
    "Tissot": { move: "Automatic", water: "50m", year: "1975", war: "2 Years" },
    "Hamilton": { move: "Manual Wind", water: "50m", year: "1965", war: "2 Years" },
    "Seiko": { move: "Automatic Mechanical", water: "70m", year: "1978", war: "2 Years" },
    "Bulova": { move: "Tuning Fork Quartz", water: "30m", year: "1971", war: "2 Years" },
    "Tudor": { move: "Self-Winding Automatic", water: "100m", year: "1969", war: "2 Years" },
    "Zenith": { move: "El Primero Automatic", water: "100m", year: "1970", war: "2 Years" },
    "Universal Genève": { move: "Micro-Rotor Automatic", water: "50m", year: "1966", war: "2 Years" },
    "Enicar": { move: "Manual Hand-Wind", water: "30m", year: "1964", war: "2 Years" },
    "Wittnauer": { move: "Mechanical Hand-Wind", water: "30m", year: "1967", war: "2 Years" },
    "Elgin": { move: "Vintage Manual", water: "30m", year: "1958", war: "2 Years" },

    "Rolex": { move: "Calibre 3235 Automatic", water: "300m", year: "2023", war: "5 Years International" },
    "Patek Philippe": { move: "Self-Winding Mechanical", water: "120m", year: "2024", war: "5 Years International" },
    "Audemars Piguet": { move: "Automatic Calibre 4302", water: "50m", year: "2023", war: "5 Years International" },
    "Cartier": { move: "Automatic 1847 MC", water: "100m", year: "2023", war: "5 Years International" },
    "TAG Heuer": { move: "Calibre 5 Automatic", water: "100m", year: "2024", war: "3 Years International" },
    "Breitling": { move: "Breitling 01 Automatic", water: "200m", year: "2023", war: "5 Years International" },
    "Vacheron Constantin": { move: "Calibre 5100 Automatic", water: "150m", year: "2024", war: "5 Years International" },
    "Hublot": { move: "HUB1280 UNICO Automatic", water: "100m", year: "2024", war: "4 Years International" },
    "IWC Schaffhausen": { move: "IWC Calibre 82110", water: "60m", year: "2023", war: "5 Years International" },
    "Jaeger-LeCoultre": { move: "Calibre 899 Automatic", water: "100m", year: "2024", war: "5 Years International" },

    "Apple Watch": { move: "Digital S9 SiP Processor", water: "50m WR", year: "2024", war: "1 Year Official" },
    "Apple": { move: "Digital S9 SiP Processor", water: "50m WR", year: "2024", war: "1 Year Official" },
    "Samsung Galaxy Watch": { move: "Exynos W930 Dual-Core", water: "50m IP68", year: "2024", war: "1 Year Official" },
    "Samsung": { move: "Exynos W930 Dual-Core", water: "50m IP68", year: "2024", war: "1 Year Official" },
    "Garmin": { move: "Garmin Smart Sensor System", water: "100m WR", year: "2024", war: "2 Years Official" },
    "Fossil": { move: "Wear OS Qualcomm 4100+", water: "30m WR", year: "2023", war: "2 Years Official" },
    "Michael Kors": { move: "Wear OS Smart Digital", water: "30m WR", year: "2023", war: "2 Years Official" },
    "Citizen Eco-Drive": { move: "Solar Powered Quartz", water: "100m WR", year: "2024", war: "5 Years Official" },
    "Huawei": { move: "HarmonyOS Dual-Chip", water: "50m WR", year: "2024", war: "1 Year Official" },
    "Google": { move: "Google Tensor Smart SoC", water: "50m WR", year: "2024", war: "1 Year Official" },
    "Fitbit": { move: "Fitbit Health Tracking SoC", water: "50m WR", year: "2024", war: "1 Year Official" }
};

function openModal(btn) {
    let box = btn.parentElement;
    let brand = box.querySelector("h3").innerText;
    let price = box.querySelector(".price").innerText;
    let img = box.querySelector("img").src;

    document.getElementById("mBrand").innerText = brand;
    document.getElementById("mPrice").innerText = price;
    document.getElementById("mImg").src = img;

    if (watchData[brand]) {
        document.getElementById("mMove").innerText = watchData[brand].move;
        document.getElementById("mWater").innerText = watchData[brand].water;
        document.getElementById("mYear").innerText = watchData[brand].year;
        document.getElementById("mWar").innerText = watchData[brand].war;
    }

    document.getElementById("modal").classList.add("show");
}

function closeModal() {
    document.getElementById("modal").classList.remove("show");
}

function sendMsg(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    event.target.reset();
}
