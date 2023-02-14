function hover(ele){
    var element = $(ele);
    element.find(".item-img").attr("src",element.find(".item-img").data("target"));
}

function leave(ele){
    var element = $(ele);
    element.find(".item-img").attr("src",element.find(".item-img").data("original"));
}