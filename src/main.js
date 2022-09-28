import "./style.css";

// cookies
const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");
const popUp = document.querySelector("#nyhedsbrev");

const tilmeldt = document.querySelector("#fjern");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks() {
  cookieboks.classList.add("hid");
}

// sessionStorage.setItem("fjernCookieboks", true);
// if (sessionStorage.setItem("fjernCookieboks")) {
//   cookieboks.classList.add("hid");
// }

// nyhedsbrev

const myTimeout = setTimeout(visNyhedsbrev, 5000);

function visNyhedsbrev() {
  popUp.style.display = "block";
  document.getElementById("blur").style.display = "block";
}

tilmeldt.addEventListener("click", fjernNyhedsbrev);

function fjernNyhedsbrev() {
  console.log("clickknap");
  popUp.style.display = "none";
  document.getElementById("blur").style.display = "none";
}
