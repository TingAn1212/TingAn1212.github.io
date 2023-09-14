var enable = true;
var enableSub = false;
var open = false;

$(function(){
    $("#includeBackground").load("background.html"); 
    $("#info").append($("<div>").load("about-me.html"));
    //$("#info").append($("<div>").load("my-strength.html"));
    $("#info").append($("<div>").load("my-achievements.html")); 
    $("#info").append($("<div>").load("my-projects.html")); 
    $("#info").append($("<div>").load("contact-me.html"));
    $("#info").append($("<div>").load("resume.html"));
    $("#info").append($("<div>").load("about-this-page.html"));
});

async function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleMaincontrol(){
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

async function enableSubcontrol(){
    $("#sub-control").css("display","block");
    $("#sub-control").animate({opacity: 1}, 500);
    await sleep(500);
    enableSub = true;
}

async function disableSubcontrol(){
    enableSub = false;
    $("#sub-control").animate({opacity: 0}, 500);
    await sleep(500);
    $("#sub-control").css("display","none");
}

async function toggleSubcontrol(){
    if (enableSub){
        disableSubcontrol();
        $(".sidebar-item-sub").animate({opacity: 0}, 500);
        await sleep(500);
        $(".sidebar-item-sub").css("display","none");

        $(".sidebar-item-main").css("display","block");
        $(".sidebar-item-main").animate({opacity: 1}, 500);
    }
}

async function select(item){
    if (enable){
        enable = false;
        $(".sidebar-item").css("background-color","");
        $(item).css("background-color","#ffffff90");
        $(".info-content").fadeOut(500);
        $(".project").fadeOut(500);
        await sleep(500);
        $(".info-content-special").css("display","none");
        $("#"+$(item).data("target")).fadeIn(500);
        await new Promise(r => setTimeout(r, 500));
        enable = true;
    }
}

async function projectSelection(){
    $("#sub-control").css("display","block");
    $("#sub-control").animate({opacity: 1}, 500);
    $(".sidebar-item-sub").animate({opacity: 1}, 500);

    $(".sidebar-item-main").animate({opacity: 0}, 500);
    await sleep(500);
    $(".sidebar-item-main").css("display","none");

    $(".sidebar-item-sub").css("display","block");
    $(".sidebar-item-sub").animate({opacity: 1}, 500);
    await sleep(500);
    enableSub = true;
}

async function selectSub(item){
    if (enable){
        enable = false;
        $(".info-content-special").css("display","block");
        $(".sidebar-item").css("background-color","");
        $(item).css("background-color","#ffffff90");
        $(".info-content").fadeOut(500);
        $(".project").fadeOut(500);
        await sleep(500);
        $("."+$(item).data("target")).fadeIn(500);
        await sleep(500);
        enable = true;
    }
}