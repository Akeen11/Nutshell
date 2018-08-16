const createMessage =  (userId ,name, message, id)=>{
    return`
    <div class="entry">
    <fieldset>
    <header class="entry__header">
        <h3>${userId}</h3>
    </header>
    <div id="entry_name">
    <h3>${name}</h3>
    <article class="entry__content">
       <p>:${message}</p>
    </article>
    <button class="message__delete" id="deleteMessage--${id}">Delete Meassage</button>
    </fieldset>
    </div>
    `
}
module.exports=createMessage