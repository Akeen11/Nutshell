const $ = require("jquery"); 

const scrollBottom = function () {   
    let scrollHeight = $("#entry").prop("scrollHeight")
    scrollHeight = scrollHeight + 500
    // console.log(typeof scrollHeight)       
    $("#entry").scrollTop(999999999)          

} 
scrollBottom() 
module.exports = scrollBottom; 