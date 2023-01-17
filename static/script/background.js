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
            $(item).css("left","100vw");
            $(item).animate({left:"0vw"},10000,function(){
                total--;
                this.remove();
            });
            $("#background").append(item);
            total++;
        }
    }
}
onStart();