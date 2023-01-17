var total = 0;
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
        if (total < 7){
            var item = $("<div class='spawn'></div>");
            $(item).css("top",randomCoord()+"px");
            $(item).animate({left:"50vw;"},5000);
            $("#background").append(item);
            total++;
        }
    }
}
onStart();