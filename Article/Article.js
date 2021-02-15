let token = localStorage.getItem("data");
console.log(token)
// git id of url
let link = (new URL(document.location)).searchParams;
let articleId = link.get('id');
console.log(articleId)
// recouper les articles
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
  getArticles()
  function generateArticles(data) {
  
  //   
    let slideShow = document.querySelector(".slider");
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
      let image8 = data.articles[8].img;}

    
    }
  