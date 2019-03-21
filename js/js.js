var modalOpenButtun = document.querySelector(".contacts-button");
var popup = document.querySelector(".back-communication");
var modalCloseButton = popup.querySelector(".close-button");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var textMessage = popup.querySelector("[name=letter]");
var overlay = document.querySelector(".modal-overlay");
var isStorageSupport = true;
var storageLogin = "";
var storageEmail = "";

try {
  storageLogin = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

modalOpenButtun.addEventListener("click", function () {
  popup.classList.add("modal-open");
  overlay.classList.add("modal-overlay-on");

  if (storageLogin) {
  	login.value = storageLogin;

  	if (storageEmail) {
    email.value = storageEmail;
    textMessage.focus();
    } else {
    	email.focus();
    }

  } else {
  	login.focus();
  }
});

modalCloseButton.addEventListener("click", function () {
  popup.classList.remove("modal-open");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-overlay-on");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !email.value || !textMessage.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
  	if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-open")) {
      popup.classList.remove("modal-open");
      popup.classList.remove("modal-error");
      overlay.classList.remove("modal-overlay-on");
    }
  }
});
