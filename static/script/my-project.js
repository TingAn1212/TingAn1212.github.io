function hover(ele){
    var element = $(ele);
    element.attr("src",element.data("original"));
}

function leave(ele){
    var element = $(ele);
    element.attr("src",element.data("target"));
}