document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("application-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "This demo form is not connected to a secure submission service yet. Your information has NOT been sent or saved. Please do not enter real personal details until the site is connected.";
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
