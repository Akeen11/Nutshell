const messageComponent =  (userId ,name, id)=>{
    return`
    <div class="entry">
    <header class="entry__header">
        <h2>${userId}</h2>
    </header>
    <article class="entry__content">
        ${name}
    </article>
    <button class="entry__delete" id="deleteMessage--${id}">Delete Meassage</button>
    `
}
module.exports=messageComponent