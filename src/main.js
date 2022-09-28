import "./style.css";

// cookies
const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");
const popUp = document.querySelector("#nyhedsbrev");
const tilmeldt = document.querySelector("#tilmeld");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

function fjernCookieBoks() {
  cookieboks.classList.add("hidden");
  sessionStorage.setItem("fjerncookieboks", true);
}

if (sessionStorage.setItem("fjerncookieboks")) {
  cookieboks.classList.add("hidden");
}

// nyhedsbrev

tilmeldt.addEventListener("click", fjernNyhedsbrev);

function fjernNyhedsbrev() {
  console.log("clickknap");
  popUp.classList.remove("scale-in-center");
  popUp.classList.add("hidden");
  sessionStorage.setItem("fjernNyhedsbrev", true);
}

if (sessionStorage.setItem("fjernNyhedsbrev")) {
  popUp.classList.add("hidden");
}

// const nyhedsbrev = document.querySelector("#hid");
// window.onload = function () {
//   setTimeout(popUp, 4000);
// };

// function popUp() {
//   console.log("Hello world");
//   nyhedsbrev.style.display = "block";
// }

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".nyhedsbrev").style.display = "block";
  }, 2000);
});

document.querySelector("#tilmeld").addEventListener("click", function () {
  document.querySelector(".nyhedsbrev").style.display = "none";
});
