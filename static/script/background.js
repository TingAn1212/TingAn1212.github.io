async function sleep(time){
    await new Promise(r => setTimeout(r, time));
}
while (true){
    await sleep(200);
    console.log("Spawn")
}