function hover(ele){
    var element = $(ele);
    element.attr("src",element.data("target"));
    if (element.attr("id") == "A"){
        element.css("height","auto");
        element.css("width","100%");
        $("#B").css("width","100%");
    }
}

function leave(ele){
    var element = $(ele);
    element.attr("src",element.data("original"));
    if (element.attr("id") == "A"){
        element.css("height","40vh");
        element.css("width","auto");
        $("#B").css("width","40vh");
    }
}