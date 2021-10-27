//expressao relugar para chegar email válido
var isEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var validateButton = document.querySelector("button");
var titleWelcome = document.querySelector("h1");
var fieldEmail = document.getElementById("email");
var fieldName = document.getElementById("name");

function validaForm() {
  var nameStr = fieldName.value;
  var emailStr = fieldEmail.value;
  var wrapperName = document.getElementById("form-field-name");
  var wrapperEmail = document.getElementById("form-field-email");

  if (nameStr.length > 0 && nameStr.length >= 3) {
    wrapperName.querySelector("span").classList.add("success");
    wrapperName.querySelector("span").innerText = "Successfully validated!";
    fieldName.style.display = "none";
    fieldEmail.style.display = "none";
    validateButton.style.display = "none";
    titleWelcome.innerText = "ok, all right!";
  } else {
    wrapperName.querySelector("span").classList.add("error");
    wrapperName.querySelector("span").innerText = "Invalid information.";
  }

  if (isEmail.test(emailStr)) {
    wrapperEmail.querySelector("span").classList.add("success");
    wrapperEmail.querySelector("span").innerText =
      "Email validado com sucesso!";
  } else {
    wrapperEmail.querySelector("span").classList.add("error");
    wrapperEmail.querySelector("span").innerText = "Invalid email";
  }
}
