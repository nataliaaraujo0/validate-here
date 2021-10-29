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

  switch (nameStr.length) {
    case 0:
      wrapperName.querySelector("span").classList.add("error");
      wrapperName.querySelector("span").innerText = "Empty field";

      break;

    case 1:
      wrapperName.querySelector("span").classList.add("error");
      wrapperName.querySelector("span").innerText =
        "You need to enter at least 3 characters";

      break;

    case 2:
      wrapperName.querySelector("span").classList.add("error");
      wrapperName.querySelector("span").innerText =
        "You need to enter at least 3 characters";

      break;

    case 3:
      wrapperName.querySelector("span").classList.add("success");
      wrapperName.querySelector("span").innerText =
        "Validated! more than a short name?!";

      break;

    default:
      wrapperName.querySelector("span").classList.add("success");

      fieldName.style.display = "none";
      fieldEmail.style.display = "none";
      validateButton.style.display = "none";
      titleWelcome.innerText = "ok, all right!";
  }

  if (isEmail.test(emailStr)) {
    wrapperEmail.querySelector("span").classList.add("success");
    wrapperEmail.querySelector("span").innerText = "successfully validated!";
  } else {
    wrapperEmail.querySelector("span").classList.add("error");
    wrapperEmail.querySelector("span").innerText = "Invalid email";
  }
}
