// Sign in et Sign up button slider

const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const btn = document.querySelector("#btn");

function register() {
  loginBtn.style.left = "-400px";
  registerBtn.style.left = "50px";
  btn.style.left = "110px";
}

function login() {
  loginBtn.style.left = "50px";
  registerBtn.style.left = "450px";
  btn.style.left = "0";
}

// Affiche un message-error pour username et password

// const emailInput = document.querySelector("#email").value;
// const pswInput = document.querySelector("#psw").value;
// const userError = document.querySelector(".usernameError");
// const pswError = document.querySelector(".passwordError");

function getTocken() {
  let dataRequest = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: "test@test.fr", password: "test1234" }),
  };
  const url = "https://simplonews.brianboudrioux.fr/users/login";
  const urlResponse = fetch(url, dataRequest).then(function (response) {
    if (response.status == 400) {
      console.log("data request  error");
    } else {
      response.json().then(function (data) {
        console.log(data);
        let token = data.token;
        localStorage.setItem("token", token);
        window.location.href = "http://127.0.0.1:5501/home/home.html";
      });
    }
  });
}
getTocken();



