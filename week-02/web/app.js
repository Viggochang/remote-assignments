const banner = document.querySelector(".banner h2");
const navIcon = document.querySelector(".nav-icon img");
const navHidden = document.querySelector(".nav-hidden");
const navX = document.querySelector(".X")
const actionButton = document.querySelector(".action-button")
const box56 = document.querySelector(".box-5-6")
const box78 = document.querySelector(".box-7-8")

banner.addEventListener("click", () => {
    bannerMsg = banner.textContent
    if (bannerMsg === "Welcome Message"){
        banner.textContent = "Have a Good Time!";
    } else {
        banner.textContent = "Welcome Message";
    }
    console.log("click bannerMsg");
});

navIcon.addEventListener("click", () => {
    navHidden.style.display = "flex";
    console.log("click nav-icon");
});

navX.addEventListener("click", () => {
    navHidden.style.display = "none";
    console.log("click X");
});

actionButton.addEventListener("click", () => {
    box56.style.display = "flex";
    box78.style.display = "flex";
    console.log("click actionButton");
});