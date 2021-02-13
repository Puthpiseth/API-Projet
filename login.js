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

// Mettre en place une alerteBox jaune en récupérant dans CSS
// DOM Cibler les éléments dans HTML et CSS

var buttonSignIn= document.querySelector(".submit-btn")
let FormBox = document.querySelector(".form-box")
FormBox.appendChild(document.createElement('div'))
let AlertBox =document.querySelector('.form-box div:last-child')
AlertBox.style.backgroundColor="yellow"
AlertBox.classList.add("AlartBox")
AlertBox.textContent="email or password not correct"
AlertBox.style.display="none"



 
// Mettre en place la connexion via une requête à la API

 buttonSignIn.addEventListener("click", function (e){// Cliquer sur le button SignIn...
    e.preventDefault(); // Bloquer la gestion des clics par défaut
    
    // Cibler les champs du formulaire et stocker les valeurs d'email et de password
    
    var email= document.querySelector("input[type=email]").value
    var password= document.querySelector("input[type=password]").value
    
    // Mettre en place une requête fetch de type POST sur le endpoint /login de l'API    
    const fetch_data = {
        method:"POST",
        headers:{
            "Content-Type": "application/json"},
            body:JSON.stringify({email:email,
                password:password})
    }
    fetch ("https://simplonews.brianboudrioux.fr/users/login",fetch_data)//  requit pour récouper tout les data de le utilisateurs dans le simplonnewsAPI
    .then (function(response){ //Créer une fonction pour vérifier la requête des base de données de l'utilisateur
        if(response.status==403){
            alert("server erreur")
        }
       
        // Si l'API retourne le status code http 400 alors : On affiche a l'utilisateur le message d'erreur retourner par l'API
        // Condition pour afficher une AlartBox si la base des données de l'utilisateur n'existe pas dans le simplonnewsAPI
        else if(response.status==400) {
        AlertBox.style.display="block"
       }else {
           response.json().then((data) => {//Stocker la base des données de l'utilisateur
               let userData = data.token
            localStorage.setItem( "data", userData )
            AlertBox.style.display="none" // En cas de succès, l'alerteBox ne s'affiche pas
            window.location.href=("home/home.html") // et redirige vers la page Home
           })
           .catch(function (erreur) {
            AlertBox.style.display="block" // En cas d'erreur, l'alerteBox s'affiche 
           }) 
       } 
    })
})


// Créer une fonction pour faire disparaîte l'alerteBox
function AlertBoxNone(){
    AlertBox.style.display="none"
}
// Cibler les champs du formulaire et stocker leurs valeurs
var emailInput= document.querySelector("input[type=email]")
var passwordInput= document.querySelector("input[type=password]")

// Ajouter un évènement de focus dans l'emailInput et l'passwordInput dans les champs du formulaire
emailInput.addEventListener("focus",AlertBoxNone)
passwordInput.addEventListener("focus",AlertBoxNone)
