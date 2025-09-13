 const API_KEY = "48ba545d2741ca139c713604e1128034"
const URL = `https://api.mediastack.com/v1/news?access_key=${API_KEY}`;



async function fetchNews() {
    try{
        let response = await fetch(URL)
        let data =await response.json()
        displayNews(data.data)
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

        newsItem.innerHTML = `<h3>${article.title}</h3> <img src="${article.image}" 
       onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'" 
       alt="news image" width="300"> <p>${article.description || "no description available"}</p> <a href = "${article.url}" target = "_blank"> Read More </a>`
        container.appendChild(newsItem)
    });
}
fetchNews()