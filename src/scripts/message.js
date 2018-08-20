const createMessage =  (userId, name, message, id)=>{
    return`
    <div id="messageDiv"class="entry">
    <article id="message-Article"
    <fieldset>
    
    <div id="entry_name">
    <h4 id ="messageName">${name}: ${message}</h4>
    <h4 id ="messageField--${id}" ${message}</h4>
    </div>
    
    <button class="message__delete" id="deleteMessage--${id}"><span>Delete Meassage</span></button>
    <button class="message_edit" id="editMessage--${id}">Edit Message</button>


    </article>
    </div>
    </fieldset>

    `
}
module.exports=createMessage