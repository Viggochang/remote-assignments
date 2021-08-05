const banner = document.querySelector(".banner h2");
const navIcon = document.querySelector(".nav-icon img");
const navHidden = document.querySelector(".nav-hidden");
const navX = document.querySelector(".X")

banner.addEventListener("click", () => {
    banner.textContent = "Have a Good Time!";
});

navIcon.addEventListener("click", () => {
    navHidden.getElementsByClassName.display = "flex";
});

navX.addEventListener("click", () => {
    navHidden.getElementsByClassName.display = "none";
});
