const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const liens = document.querySelectorAll('.menu a');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    burger.classList.toggle('burger-cross');
});

liens.forEach((lien) => {
    lien.addEventListener('click', () => {
        menu.classList.remove('menu-open');
        burger.classList.remove('burger-cross');
    });
});

// 
function getArticles() {
    let token = localStorage.getItem("data");
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
    let articl1 =document.getElementById("articl1")
    let articl2 =document.getElementById("articl2")
    let articl3 =document.getElementById("article3")
    let articlV1 =" "
    let articlV2 =" "
    let articlV3 =" "
  
  //   
    let slideShow = document.querySelector(".slider");
    let slideShowElem = "";
    for (let i = 0; i< data.articles.length; i++) {
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
      let id1= data.articles[1].id;
      let titre1 = data.articles[1].title;
      let image1 = data.articles[1].img;
      let id3= data.articles[3].id;
      let titre3 = data.articles[3].title;
      let image3 = data.articles[3].img;
      let id8= data.articles[8].id;
      let titre8 = data.articles[8].title;
      let image8 = data.articles[8].img;
      
  
    
   
      slideShowElem = `<div class="slides">
  <div class="slide"><p>${titre2} <a href="article.html?id=${id2}"><button>lire plus</button></a></p><img src="${image2}" alt="sweeney todd"></div>
  <div class="slide"><p>${titre7}<a href="./article.html?id=${id7}"><button>lire plus</button></a></p><img src="${image7}" alt="Bellatrix"></div>
  <div class="slide"><p>${titre4}<a href="./article.html?id=${id4}"><button>lire plus</button></a></p><img src="${image4}" alt="queen of hearts"></div>
  <div class="slide"><p>${titre10}<a href="./article.html?id=${id10}"><button>lire plus</button></a></p><img src="${image10}" alt="dracula"></div>
  </div>`;
  // Articla1
  articlV1=` <p>${titre1}</p>
  <a href="./article.html?id=${id1}">
              <button>lire plus</button>
          </a>`
   articl1.innerHTML=articlV1
   articl1.style.backgroundImage=`url("${image1}")`
   // Articla2
  articlV2=`  <div class="backgrounText"> <p>${titre3}</p></div>
  <a href="./article.html?id=${id3}">
              <button>lire plus</button>
          </a>`
   articl2.innerHTML=articlV2
   articl2.style.backgroundImage=`url("${image3}")`
    
  // Article 3
  articlV3=` <p>${titre8}</p>
  <a href="./article.html?id=${id8}">
              <button>lire plus</button>
          </a>`
   articl3.innerHTML=articlV3
   articl3.style.backgroundImage=`url("${image8}")`
    }
  //   
  
  
    slideShow.insertAdjacentHTML("afterbegin", slideShowElem);
    
  };




