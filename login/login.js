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

// register();
// login();
// logVerfier lemotdepass et emaile
var buttonSignIn= document.querySelector(".submit-btn")
// creer AlartBox
 let FormBox = document.querySelector(".form-box")
 FormBox.appendChild(document.createElement('div'))
 let AlertBox =document.querySelector('.form-box div:last-child')
 AlertBox.style.backgroundColor="yellow"
 AlertBox.classList.add("AlartBox")
 AlertBox.textContent="email or password not correct"
 AlertBox.style.display="none"



 
// login API
 buttonSignIn.addEventListener("click", function (e){// en clickan le button SignIn...
    var email= document.querySelector("input[type=email]").value// le valeur de inputEmail
    var password= document.querySelector("input[type=password]").value// le valeur de password
    const fetch_data = {// le variable de qui a tout les data de le utilisateur
        method:"POST",
        headers:{
            "Content-Type": "application/json"},
            body:JSON.stringify({email:email,
                password:password})
    }
    fetch ("https://simplonews.brianboudrioux.fr/users/login",fetch_data)//  requit pour récouper tout les data de le utilisateurs dans le simplonnewsAPI
    .then (function(response){ //Function pour virefier le reponse de le requit avec le data de le utilisateur
        if(response.status==403){
            alert("server erreur")
        }
       else if(response.status==400) {//condition pour afficher le AlartBox si le data de le utilisateur n'exist pas dans le simplonnewsAPI
        AlertBox.style.display="block"
       }else {
           response.json().then((data) => {//stocker le data de l'utilisateur et entrer dans le home page
               let userData = data.token
            localStorage.setItem( "data", userData )
            AlertBox.style.display="none"
            window.location.href=("/home/simplon/newsProjet/API-Projet/home/home.html")
           })
           .catch(function (erreur) {
            AlertBox.style.display="block"
           }) 
       } 
    })
})
// end of login API 
// AlertBox disparter onfocus on input
function AlertBoxNone(){
    AlertBox.style.display="none"
}
var emailInput= document.querySelector("input[type=email]")
var passwordInput= document.querySelector("input[type=password]")
emailInput.addEventListener("focus",AlertBoxNone)
passwordInput.addEventListener("focus",AlertBoxNone)
// ....

