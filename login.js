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

const emailInput = document.querySelector("#email").value;
const pswInput = document.querySelector("#psw").value;
const userError = document.querySelector(".usernameError");
const pswError = document.querySelector(".passwordError");

document.querySelector("#login-btn").addEventListener("click", () => {
   
    const emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";
    if (emailInput !== emailRegex || emailInput === "" || emailInput == null && pswInput.length < 8) {
        userError.style.display = "block";
        pswError.style.display = "block";
    }

    if(emailInput === emailRegex && pswInput.length > 8) {
        userError.style.display = "none";
        pswError.style.display = "none";
    }

});










// redirection la page home

// https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
// https://www.youtube.com/watch?v=Swzem9EdFhw


// document.querySelector(".submit-btn").addEventListener("click", function() {
//     window.location.href = "http://127.0.0.1:5501/home.html."
// });
