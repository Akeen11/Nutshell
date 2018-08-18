const createMessage =  (userId, name, message, id)=>{
    return`
    <div id="messageDiv"class="entry">
    <article id="message-Article"
    <fieldset>
    
    <div id="entry_name">
    <h4 id="messageField--${id}">${name}: ${message}</h4>
    </div>
    <button class="message__delete" id="deleteMessage--${id}">Delete Meassage</button>
    <button class="message_edit" id="editMessage--${id}">Edit Message</button>
    <h1>hello</h1>
    <button id="topOfChat">Earliest Messages</button>

    </article>
    </div>
    </fieldset>

    `
}
module.exports=createMessage