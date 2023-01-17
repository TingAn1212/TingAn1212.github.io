var total = 0;
var cd = 10;
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
function randomBin(){
    var bin = "";
    for (let i=0;i<8;i++){
        bin += String(rng(0,1));
    }
    return bin;
}
async function onStart(){
    while (true){
        await sleep(100);
        for (var spawn of $(".spawn")){
            $(spawn).text(randomBin());
        }
        if (rng(1,15) == 2 && cd < 0){
            if (total < 5){
                var item = $("<div class='spawn'>"+randomBin()+"</div>");
                var size = rng(24,32);
                $(item).css("height",size+"px");
                $(item).css("font-size",size+"px");
                $(item).css("margin-top",randomCoord()+"px");
                $(item).css("margin-left","100vw");
                $(item).animate({'marginLeft':"-20vw"},10000, "linear",function(){
                    total--;
                    this.remove();
                });
                $("#background").append(item);
                total++;
                cd = 10;
            }
        }else{
            cd--;
        }
    }
}
onStart();