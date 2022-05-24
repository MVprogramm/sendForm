const form = document.querySelector(".login-form");
const register = document.querySelector(".submit-button");

const requestUrl = "https://6275fcfd15458100a6a9c207.mockapi.io/api/v1/form";

const formHandler = () => {
  const isValid = form.reportValidity();
  if (isValid) {
    register.removeAttribute("disabled");
  } else {
    register.setAttribute("disabled", true);
  }
};

form.addEventListener("input", formHandler);

const registerHandler = (event) => {
  event.preventDefault();

  const userData = Object.fromEntries(new FormData(form));

  fetch(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((res) => {
      register.setAttribute("disabled", true);
      form.reset();

      alert(JSON.stringify(res));
    });
};
register.addEventListener("click", registerHandler);
