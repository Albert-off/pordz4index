const searchButton = document.querySelector("nav .nav-list-larger .nav-link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".nav-list-larger");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})


// Mobile Version

/* const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
}) */

const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});