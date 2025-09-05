 const API_KEY = "d68e7ada1c8440658501e8b5ec9098c1"
const URL = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${API_KEY}`


async function fetchNews() {
    try{
        let response = await fetch(URL)
        let data =await response.json()
        displayNews(data.articles)
    }
    catch (error){
        console.log(`Error:${error}`)
    }
    
}

function displayNews(articles){
    let container = document.getElementById("news_container")
    container.innerHTML= ""

    articles.forEach(article => {
        let newsItem = document.createElement("div")
        newsItem.classList.add("news-item")

        newsItem.innerHTML = `<h3>${article.title}</h3> <img src="${article.urlToImage}" alt="news image" width="300"> <p>${article.description || "no description available"}</p> <a href = "${article.url}" target = "_blank"> Read More </a>`
        container.appendChild(newsItem)
    });
}
fetchNews()