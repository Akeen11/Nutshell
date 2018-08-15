// what is generated when you submit the entry.
// This is how the entry is formatted
const articleEntry = (title, content, id) => {
    return `
            <header class="titleField>
                <h2>${title}</h2>
            </header>
            <div class="contentField">
                ${content}
            </div>
            <button class="article__delete" id="delete--${id}">Delete Article Entry</button>
        </div>
    `
}
// unsure if it should be ${article.articleId} or ${article.id} for the delete button

module.exports = articleEntry