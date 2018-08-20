const $ = require("jquery")
//const apiManager = require("./DataManager")
const MeassageFormManager = Object.create(null, {
    clearForm: {
        value: () => {
            $("#message-input").val("")
            //$("#message-btn").val("")

        }
    },


    
    renderMessageForm: {
        value: () => {
            console.log("Messeges")
            return `
     
     <div id="message-container">
    
     <legend id="Welcome"> Welcome to the Nutshell's chat room</legend>
     <script>
     function isTyping() {
         document.getElementById("typing_on").innerHTML = "User is typing...! "
        }
        
        function notTyping() {
            document.getElementById("typing_on").innerHTML = "No one is typing ! "
        }
        </script>
        <textarea onkeypress="setTimeout(isTyping(),2000); setInterval(notTyping,3000)"  name="textarea" id="message-input" cols="50" rows="5" placeholder="Meassge"></textarea>
        <div id="typing_on"></div>
        
        
        
        <button class="messageButton" id="message-btn">Send Message</button>
        <script>
var input = document.getElementById("message-input");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("message-btn").click();
    }
});
</script>
        
        </div>`
        
    }
}

    
})
//<div id="message-box"></div>



  
//<textarea onkeypress="setTimeout(isTyping(),4000) setInterval(notTyping,5000)"  name="textarea" id="message-input" cols="50" rows="5" placeholder="Meassge"></textarea>

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
module.exports = MeassageFormManager