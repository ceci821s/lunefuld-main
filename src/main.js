import "./style.css";

//Cookieboks
const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks() {
  cookieboks.classList.add("hidden");
  sessionStorage.setItem("fjerncookieboks", true);
}

if (sessionStorage.getItem("fjerncookieboks")) {
  fjernCookieBoks.classList.add("hidden");
}

//nyhedsbrev
const denyNyhedsbrev = document.querySelector("#luk");
const nyhedsbrevBoks = document.querySelector("#nyhedsbrevBoks");

denyNyhedsbrev.addEventListener("click", fjernNyhedsbrevBoks);

function fjernNyhedsbrevBoks() {
  nyhedsbrevBoks.classList.add("hidden");
  sessionStorage.setItem("fjernNyhedsbrevBoks", true);
}

if (sessionStorage.getItem("fjernNyhedsbrevBoks")) {
  fjernNyhedsbrevBoks.classList.add("hidden");
}
