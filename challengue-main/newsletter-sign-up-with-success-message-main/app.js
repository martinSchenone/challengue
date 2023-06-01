const inputEmail = document.getElementById("input-email");
const form = document.getElementById("form");
const errorInput = document.getElementById("error-input");
const sucessContainer = document.getElementById("container-success")
const cardContainer = document.getElementById("card-container")
const spanEmail =  document.getElementById("userEmail")
const dismissBTN = document.getElementById("dismiss-subscription")

var email = "";
var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validarFormulario();
});

function validarFormulario() {
  email = inputEmail.value;
  validarEmail();
}

function validarEmail() {
  if (email === "" || !email.match(regexEmail)) {
    errorInput.innerText = "Ingresa un email valido";
    errorInput.classList.add("error");
    inputEmail.classList.add("error");

    inputEmail.value = "";
  } else if (email.match(regexEmail)) {
    inputEmail.value = "";

    sucessContainer.style.display = "flex"
    cardContainer.style.display = "none"
    spanEmail.innerText = email;
  }
}

dismissBTN.addEventListener("click",()=>{
  sucessContainer.style.display = "none"
  cardContainer.style.display = "flex"
})
