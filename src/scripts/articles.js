// what is generated when you submit the entry.
// This is how the entry is formatted
const createArticle = (title, date, content, URL, id ) => {
    return `
    <fielset>
            <header class="titleField">
                <h2>${title}</h2>
            </header>
            <section>
                <time>${date}</time>
            </section>
            <div class="contentField">
                ${content}
            </div>
            <div class="urlField">
                ${URL}
            </div>
            <button id="deleteArticleButton--${id}" class="article__delete">Delete Article Entry</button>
        </div>
    </fieldset>
    `
}

module.exports = createArticle