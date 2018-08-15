const $ = require("jquery")
//const apiManager = require("./DataManager")
const MeassageFormManager  = Object.create(null, {
    clearForm: {
        value: () => {
            $("#message-input").val("")
            //$("#message-btn").val("")

        }
    },

 renderMessageForm :{
     value: ()=> {
     console.log("Messeges")
     return`
     
     <div>
     <fieldset>
     <legend> Welcome:</legend>
     <h2 id="message-header"> Start Chatting </h2>
     <article id="message-article>
     <section id="message-section">
     <div id="message-box">
     <input required type="text" id="message-input" placeholder="Meassge">
     <button class="messageButton" id="message-btn">Send Message</button>
     </div>
     </section>
     </article>
     </fieldset>
     </div>`
    }
 }
})

//      const $header=$("<h2>")
//      $header.attr("id","Message-header")
//      $header.text(" Start Chat")

//     const $messageArticle = $("<article>").attr("id","message-article")
//    // $messageArticle.attr("id","message-article")

//     //This part creates the article for messages, the input box, and appends them to the DOM
//   let $section=  $("<section>").attr("id", "message-section").appendTo($messageArticle)
//     let $inputDiv = $("<div>").attr("id", "input-div")
//   let $input=  $("<input>").attr("type", "text").attr("id", "message-input").appendTo($inputDiv)
//   let $button=  $("<button>").attr("type", "button").attr("id", "message-btn").text("Send Message").appendTo($inputDiv)
//     $inputDiv.appendTo($messageArticle)
//buildMessageArticle()
module.exports=MeassageFormManager