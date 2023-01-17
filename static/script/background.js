async function sleep(time){
    await new Promise(r => setTimeout(r, time));
}
function randomCoord(){
    let start = 10;
    let stop = screen.height-42;
    return String(Math.round(start+(Math.random()*stop)));
}
async function onStart(){
    while (true){
        await sleep(100);
        var item = $("<div class='spawn'></div>");
        $(item).css("top",randomCoord());
        $(item).css("left","0");
        $("#background").append(item);
    }
}
onStart();