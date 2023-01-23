var enable = true;

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

async function select(item){
    if (enable){
        enable = false;
        $(".sidebar-item").css("background-color","");
        $(item).css("background-color","#ffffff90");
        $(".info-content").fadeOut(500);
        await new Promise(r => setTimeout(r, 500));
        $("#"+$(item).data("target")).fadeIn(500,function(){enable = true});
        console.log($(item).data("target"));
    }
}