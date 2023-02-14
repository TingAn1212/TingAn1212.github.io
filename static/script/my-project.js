function hover(ele){
    var element = $(ele);
    element.attr("src",element.data("target"));
}

function leave(ele){
    var element = $(ele);
    element.attr("src",element.data("original"));
}