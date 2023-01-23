$(function(){
    $("#includeBackground").load("background.html"); 
    $("#info").append($("<div>").load("about-me.html"));
    $("#info").append($("<div>").load("my-story.html")); 
});
var open = false;
function toggle(){
    if (open){
        //close
        open = false;
        $("#bar-v").css("height","100%");
        $("#bar-v").css("margin-top","0%");
        $("#bar-h").css("margin-top","-55%");
        $("#sidebar-content").slideToggle(500);
    }else{
        //open
        open = true;
        $("#bar-v").css("height","0");
        $("#bar-v").css("margin-top","50%");
        $("#bar-h").css("margin-top","-2.5%");
        $("#sidebar-content").slideToggle(500);
    }
}

function select(item){
    $(".sidebar-item").css("background-color","");
    $(item).css("background-color","#ffffff90");
    $(".info-content").fadeOut();
    $("#"+$(item).data("target")).fadeIn();
    console.log($(item).data("target"))
}