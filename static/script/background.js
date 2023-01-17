async function sleep(time){
    await new Promise(r => setTimeout(r, time));
}
function randomCoord(){
    let start = 10;
    let stop = screen.height-42;
    return start+(Math.random()*stop);
}
async function onStart(){
    while (true){
        await sleep(100);
        console.log(randomCoord);
    }
}
onStart();