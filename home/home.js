const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const liens = document.querySelectorAll(".menu a");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  burger.classList.toggle("burger-cross");
});

liens.forEach((lien) => {
  lien.addEventListener("click", () => {
    menu.classList.remove("menu-open");
    burger.classList.remove("burger-cross");
  });
});



function getArticles() {
  let token = localStorage.getItem("token");
  console.log(token);
  let dataRequest = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  fetch("https://simplonews.brianboudrioux.fr/articles", dataRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      generateArticles(data);
    });
}
getArticles();
function generateArticles(data) {
  //   console.log(data.articles);
  let articleDiv = document.querySelector(".text");
  let articlesSimplon = "";
  let articleDiv2 = document.querySelector("section > div > div");
  let articlesSimplon2 = "";
  let slideShow = document.querySelector(".slider");
  let slideShowElem = "";
  for (let i = 0; i < data.articles.length; i++) {
    let id = data.articles[0].id;
    let titre = data.articles[0].title;
    let image = data.articles[0].img;
    let id1 = data.articles[1].id;
    let titre1 = data.articles[1].title;
    let image1 = data.articles[1].img;
    let id2 = data.articles[2].id;
    let titre2 = data.articles[2].title;
    let image2 = data.articles[2].img;
    let id7 = data.articles[7].id;
    let titre7 = data.articles[7].title;
    let image7 = data.articles[7].img;
    let id4 = data.articles[4].id;
    let titre4 = data.articles[4].title;
    let image4 = data.articles[4].img;
    let id10 = data.articles[10].id;
    let titre10 = data.articles[10].title;
    let image10 = data.articles[10].img;
    let id15 = data.articles[15].id;
    let titre15 = data.articles[15].title;
    let image15 = data.articles[15].img;

    articlesSimplon = `<div class="text PremArticles" id="articl2">
    <p>${titre1}.</p>
    <a href="">
        <button>lire plus</button>
    </a>
</div>`;
    articlesSimplon2 = `<div class="article3  text" id="article3" >
<p>${titre15}</p>
<a href="">
    <button>lire plus</button>
</a>
</div>`;
    slideShowElem = `<div class="slides">
<div class="slide"><p>${titre2} <a href=""><button>lire plus</button></a></p><img src="${image2}" alt="sweeney todd"></div>
<div class="slide"><p>${titre7}<a href=""><button>lire plus</button></a></p><img src="${image7}" alt="Bellatrix"></div>
<div class="slide"><p>${titre4}<a href=""><button>lire plus</button></a></p><img src="${image4}" alt="queen of hearts"></div>
<div class="slide"><p>${titre10}</p><img src="${image10}" alt="dracula"></div>
</div>`;
  }
  articleDiv.insertAdjacentHTML("afterend", articlesSimplon);
  slideShow.insertAdjacentHTML("afterbegin", slideShowElem);
  articleDiv2.insertAdjacentHTML("afterend", articlesSimplon2);
  
};


//////////////////////////////////////////////////////////////////////////////////////////////
// function redirection(id){
//     location.href= "http://127.0.0.1:5500/ArticlePage/Article.html?id="+id
// }
// getArticles();
// function  generateArticles(data){
//     console.log(data.articles);
//     let divArticle = document.querySelector('.text');
//     let articles = "";
//     for(let i =0; i<data.articles.length; i++){
//         let id = data.articles[i].id;
//         let titre = data.articles[i].title;
//         let image = data.articles[i].img;
//         let resume = data.articles[i].resume;
//         let author = data.articles[i].author;

//         articles += ` <div class="text PremArticles" id="articl1" onclick="redirection(${id})">
//         <h1>${titre}</h1>
//         <h2>${author}</h2>
//         <img src="${image}" alt="">
//       <p>${resume}.</p>
//     </div>`
//     }
//     divArticle.innerHTML = articles;
// }
// function redirection(id){
//     location.href= "http://127.0.0.1:5500/ArticlePage/Article.html?id="+id
// }
