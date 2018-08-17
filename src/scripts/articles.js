// what is generated when you submit the entry.
// This is how the entry is formatted

// Passing in name, title, date, content, URL, and id. These must be in the same order as what is passed into the createArticle
// function in ArticleList
// Was able to get the URL to display as a hyperlink by using 'a href="url"'. I thought that was pretty sick! Great find
// on w3schools! so when the URL is posted it appears as a hyperlink. Hell yeah.

const createArticle = (name, title, date, content, URL, id) => {
    return `
    <fieldset>
    <section>${name}</section>
            <header class="titleField">
                <h2>${title}</h2>
            </header>
            <section>
                <time>${date}</time>
            </section>
            <div class="contentField">
                ${content}
            </div>
            <a href="url">${URL}</a>
        </div>
    </fieldset>
    <p></p>
    <button id="deleteArticleButton--${id}" class="article__delete">Delete Article Entry</button>
    `
}

module.exports = createArticle