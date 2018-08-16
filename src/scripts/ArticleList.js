// requiring jQuery to "jQuerify" things. I dig it, man.
const $ = require("jquery")
// requiring ArticleEntry
const articleComponent = require("./ArticleEntry")

// targetting "#articleEntry" in index.html using jQuery.
const articleDOM = $("#articleEntry")

// creating a function to populate article entries on the page.
const articleEntryList = (entries) => {
    console.log("articleEntry", articleDOM)
    let newDOM = ""
    // using .map to provide 
    entries.map(entry => {
        newDOM += articleComponent(entry)
    })
    articleDOM.html(newDOM)
    console.log(articleDOM)
}

// exporting so articleEntryList may be used by another module
module.exports = articleEntryList