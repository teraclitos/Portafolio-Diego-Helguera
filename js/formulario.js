const form = document.getElementById("form");

const inputsArray = document.querySelectorAll(".input-contact");
const inputsArrayRequired = document.querySelectorAll(".required");
const wrongName = document.querySelector(".wrong-name");
const wrongEmail = document.querySelector(".wrong-email");
const wrongText = document.querySelector(".wrong-text");
const btnSubmit = document.getElementById("btn-submit");
const correct = document.querySelector(".correct-container");
const error = document.querySelector(".error-container");

const validations = {
  name: false,
  email: false,
  text: false,
};

const expression = {
  name: /^[a-zA-ZÀ-ÿ\s]{0,100}$/,

  mail: /[[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+]{0,100}$/,
};

const validation = (inputName, inputValue, inputs) => {
  switch (inputName) {
    case "name":
      if (
        (expression.name.test(inputValue) &&
          inputValue.trim().length > 2 &&
          inputValue.trim().length < 30) ||
        inputValue === ""
      ) {
        wrongName.classList.add("none");
        inputs.classList.remove("border-wrong");

        if (inputValue !== "") {
          validations.name = true;
        } else {
          validations.name = false;
        }
      } else {
        wrongName.classList.remove("none");
        inputs.classList.add("border-wrong");
        validations.name = false;
      }

      break;
    case "asunto":
      console.log("el asunto funciona");

      break;
    case "email":
      if (
        (expression.mail.test(inputValue) &&
          inputValue.trim().length > 2 &&
          inputValue.trim().length < 31) ||
        inputValue === ""
      ) {
        wrongEmail.classList.add("none");
        inputs.classList.remove("border-wrong");
        if (inputValue !== "") {
          validations.email = true;
        } else {
          validations.email = false;
        }
      } else {
        wrongEmail.classList.remove("none");
        inputs.classList.add("border-wrong");
        validations.email = false;
      }

      break;

    default:
      if (
        // (expression.text.test(inputValue) &&
        (inputValue.trim().length > 6 && inputValue.trim().length < 401) ||
        inputValue === ""
      ) {
        wrongText.classList.add("none");
        btnSubmit.classList.remove("top-btn-submit");
        inputs.classList.remove("border-wrong");
        if (inputValue !== "") {
          validations.text = true;
        } else {
          validations.text = false;
        }
      } else {
        wrongText.classList.remove("none");
        btnSubmit.classList.add("top-btn-submit");
        inputs.classList.add("border-wrong");
        validations.text = false;
      }
      break;
  }
};

inputsArray.forEach((input) => {
  input.addEventListener("input", () => {
    validation(input.name, input.value, input);
  });
  input.addEventListener("blur", () => {
    validation(input.name, input.value, input);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validations.name && validations.email && validations.text) {
    correct.classList.remove("none");
    error.classList.add("none");
    form.reset();
    setTimeout(() => {
      location.href = "/index.html";
    }, 5000);
  } else {
    inputsArrayRequired.forEach((inputs) => {
      if (inputs.value.trim() === "") {
        inputs.classList.add("border-wrong");
      }
    });

    error.classList.remove("none");
    setTimeout(() => {
      error.classList.add("none");
    }, 5000);
  }
});
