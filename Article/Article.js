let token = localStorage.getItem("data");
// console.log(token)

// get id of url
let link = (new URL(document.location)).searchParams;
let articleId = link.get('id');
console.log(articleId)

// recouper les articles
function getArticles() {
  
    let token = localStorage.getItem("data");
    // console.log(token);
    let dataRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    fetch("https://simplonews.brianboudrioux.fr/articles/"+articleId, dataRequest)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.article)

        generateArticles(data.article);
      });
  }
  getArticles()
  
  
  function generateArticles(data) {
  
    let articleHtml = document.querySelector("main article")
    // console.log(articleHtml)
    articleHtml.innerHTML = `
    <h1>${data.title}</h1>
    <img src="${data.img}" alt="${data.img}">
    <h4>${data.author}</h4>
    <p>${data.resume}</p> 
    <p>${data.content}</p>
      `;
    
    }
  