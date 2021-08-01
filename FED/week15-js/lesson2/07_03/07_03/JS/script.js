
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e){
    e.preventDefault();
    // CTA.classList.toggle("hide");

    // Change cta inner html to Book Now!
    CTA.innerHTML = CTA.innerHTML == "Book Now!" ? "OOOPS" : "Book Now!";
    ALERT.classList.toggle("hide");
}

CTA.addEventListener("click", reveal, false)