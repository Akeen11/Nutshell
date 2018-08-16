const createArticle = require("./articles")
const DataManager = require("./DataManager")
const $ = require("jquery")

listArticles = () => {
    DataManager.getAllArticles() //calls function to get event from DB
        .then(results => {
            $("#articleEntry").empty() //clears div before rendering list of events
            results.forEach(article => { //loops through each event grabbing info
                let articleComponent = createArticle(article.title, article.date, article.content, article.URL, article.id)
                writeArticlesToDOM(articleComponent) //calls function to write event list to DOM
            })
        });
    }
    writeArticlesToDOM = (article) => { //specifies id in index where event list get appended onto DOM
        $("#articleEntry").append(article) //replaces innerHTML =+
}

module.exports = listArticles