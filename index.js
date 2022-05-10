const form = document.querySelector(".login-form");
const register = document.querySelector(".submit-button");

const formHandler = (event) => {
  if (document.querySelector(".login-form").reportValidity()) {
    register.removeAttribute("disabled");
  } else {
    register.setAttribute("disabled", "");
  }
};
form.addEventListener("change", formHandler);

const registerHandler = (event) => {
  event.preventDefault();

  const message = fetch(
    "https://6275fcfd15458100a6a9c207.mockapi.io/api/v1/form",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        email: document.querySelector("#email").value,
        username: document.querySelector("#name").value,
        password: document.querySelector("#password").value,
      }),
    }
  );

  register.setAttribute("disabled", "");
  document.querySelector("#email").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#password").value = "";

  message.then((res) => res.json()).then((res) => alert(JSON.stringify(res)));
};
register.addEventListener("click", registerHandler);
