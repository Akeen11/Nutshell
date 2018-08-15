// requiring jQuery to "jQuerify" things. I dig it, man.
const $ = require("jquery")
// requiring ArticleEntry
const articleComponent = require("./ArticleEntry")

// targetting "#articleEntry" in index.html using jQuery.
const articleEntry = $("#articleEntry")

// creating a function to populate article entries on the page.
const articleEntryList = (entries) => {
    articleEntry.innerHTML = ""
    // using .map to provide 
    entries.map(entry => {
        articleEntry.innerHTML += articleComponent(entry)
    })
}

// exporting so articleEntryList may be used by another module
module.exports = articleEntryList