// requiring jQuery to "jQuerify" things. I dig it, man.
const $ = require("jquery")
// requiring ArticleEntry
const articleComponent = require("./ArticleEntry")

// targetting "#articleEntry" in index.html using jQuery.
const listArticle = $("#articleEntry")

// creating a function to populate article entries on the page.
const articleEntryList = (entries) => {
    listArticle.innerHTML = ""
    // using .map to provide 
    entries.map(articleEntry => {
        listArticle.innerHTML += articleComponent(articleEntry)
    })
}

// exporting so articleEntryList may be used by another module
module.exports = articleEntryList