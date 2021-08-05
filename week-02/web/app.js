const banner = document.querySelector(".banner h2");
const navIcon = document.querySelector(".nav-icon img");
const navHidden = document.querySelector(".nav-hidden");
const navX = document.querySelector(".X")

banner.addEventListener("click", () => {
    bannerMsg = banner.textContent
    if (bannerMsg === "Welcome Message"){
        bannerMsg = "Have a Good Time!";
    } else {
        bannerMsg = "Welcome Message";
    }
});

navIcon.addEventListener("click", () => {
    navHidden.style.display = "flex";
    console.log("click nav-icon")
});

navX.addEventListener("click", () => {
    navHidden.style.display = "none";
    console.log("click X")
});
