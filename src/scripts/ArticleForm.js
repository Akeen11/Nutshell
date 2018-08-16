const $ = require("jquery")

const ArticleForm = Object.create(null, {
    clearForm: {
        value: () => {
            $("#articleTitle").val("")
            $("#articleContent").val("")
            $("#eventDate").val("")
        }
    },
    renderArticleForm: {
        value: () => {
            return `
                <h2>Articles</h2>
                <fieldset class="titleField">
                    <label for="articleTitle">Article Title:</label>
                    <p></p>
                    <input required type="text" id="articleTitle" placeholder="Article Title" size="35">
                </fieldset>
                    <p></p>
                <fieldset>
                    <label for="articleDate">Article Date:</label>
                    <input required type="date" id="articleDate">
                    <label for="articleURL">Article URL:</label>
                    <input required type="text" id="articleURL" placeholder="Article URL">
                </fieldset>
                <fieldset class="contentField">
                <p><p/>
                    <label for="articleContent">Article Content:</label>
                    <p></p>
                    <textarea id="articleContent" placeholder="Article Content Goes Here!" rows="5" cols="70"></textarea>
                </fieldset>
                <p></p>
                <button id="saveArticle">Post Article</button>
            `
        }
    }
})

module.exports = ArticleForm