const ArticleForm = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#articleTitle").value = ""
            document.querySelector("#articleContent").value = ""
        }
    },
    renderArticleForm: {
        value: () => {
            return `
                <section class="journalField">
                    <label for="articleTitle">Article Title</label>
                    <input required type="text" id="articleTitle" placeholder="What's The Title Of Your Article?">
                </section>
                <fieldset class="journalField">
                    <label for="entryContent">Article Content</label>
                    <textarea id="articleContent"
                              placeholder="Article Content Goes Here!"
                              rows="5"
                    >
                    </textarea>
                </fieldset>
                <button id="postArticleButton">Post Article</button>
            `
        }
    }

})


module.exports = ArticleForm