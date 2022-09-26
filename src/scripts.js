// Navigation
const toggleSearch = () => {
    document.getElementById("searchInput").classList.toggle("hidden");
};
const mdOptionsToggle = () => {
    document.getElementById("md-searchbar").classList.toggle("hidden");
    document.getElementById("md-searchbar").classList.toggle("flex");
};
const openMenu = () => {
    document.getElementById("mobile-menu").classList.remove("hidden");
};
const closeMenu = () => {
    document.getElementById("mobile-menu").classList.add("hidden");
};
// Navigation slut

function showFilters() {
    var fSection = document.getElementById("filterSection");
    if (fSection.classList.contains("hidden")) {
        fSection.classList.remove("hidden");
        fSection.classList.add("block");
    } else {
        fSection.classList.add("hidden");
    }
}

function applyFilters() {
    document.querySelectorAll("input[type=checkbox]").forEach((el) => (el.checked = false));
}

function closeFilterSection() {
    var fSection = document.getElementById("filterSection");
    fSection.classList.add("hidden");
}
