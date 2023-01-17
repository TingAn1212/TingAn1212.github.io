var total = 0;
async function sleep(time){
    await new Promise(r => setTimeout(r, time));
}
function randomCoord(){
    let start = 10;
    let stop = screen.height-42;
    return String(Math.round(start+(Math.random()*(stop-start))));
}
function rng(start,stop){
    return Math.round(start+(Math.random()*(stop-start)));
}
async function onStart(){
    while (true){
        await sleep(100);
        if (rng(1,25) == 2){
            if (total < 5){
                var item = $("<div class='spawn'></div>");
                $(item).css("margin-top",randomCoord()+"px");
                $(item).css("margin-left","100vw");
                $(item).animate({'marginLeft':"-20vw"},10000, "linear",function(){
                    total--;
                    this.remove();
                });
                $("#background").append(item);
                total++;
            }
        }
    }
}
onStart();