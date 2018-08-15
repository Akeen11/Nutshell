const $ = require("jquery")
// creating the html representation of the article form.
// function for the Article Form
const ArticleForm = Object.create(null, {
    // clearing the form once you have entered the information and posted it
    clearForm: {
        value: () => {
            $("#articleTitle").val("")
            $("#articleContent").val("")
        }
    },
    // rendering the html respresentation of the article 
    renderArticleForm: {
        value: () => {
            return `
                <section class="titleField">
                    <label for="articleTitle">Article Title:</label>
                    <p></p>
                    <input required type="text" id="articleTitle" placeholder="Article Title">
                </section>
                <section class="contentField">
                <p><p/>
                    <label for="articleContent">Article Content:</label>
                    <p></p>
                    <textarea id="articleContent" placeholder="Article Content Goes Here!" rows="5">
                    </textarea>
                </section>
                <button id="saveArticleButton">Post Article</button>
            `
        }
    }
})

module.exports = ArticleForm