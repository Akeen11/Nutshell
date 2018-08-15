// what is generated when you submit the entry.
// This is how the entry is formatted
const articleEntry = (article) => {
    return `
            <header class="titleField>
                <h2>${article.title}</h2>
            </header>
            <div class="contentField">
                ${article.content}
            </div>
            <button class="article__delete" id="delete--${article.id}">Delete Article Entry</button>
        </div>
    `
}
// unsure if it should be ${article.articleId} or ${article.id} for the delete button

module.exports = articleEntry