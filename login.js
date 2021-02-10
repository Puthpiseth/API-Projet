let loginBtn = document.querySelector("#login");
let registerBtn = document.querySelector("#register");
let btn = document.querySelector("#btn");


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

register();
login();