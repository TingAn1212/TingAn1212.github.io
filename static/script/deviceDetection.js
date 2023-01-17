//this function check if the user device have the important keywords for mobile, if there is more device, pls upldate the checlist
function mobile(){
    const checklist = ["Mobile","Android","webOS","iPhone","iPad","iPod","BlackBerry","BB","PlayBook","IEMobile","Windows Phone","Kindle","Silk","Opera Mini"]
    var agent = navigator.userAgent;
    agent = agent.toLowerCase();
    //console.log(agent);
    for (var checkcase in checklist){
        if (agent.includes(checklist[checkcase].toLowerCase())){
            //console.log(checklist[checkcase]);
            return true;
        }
    }
    if (window.innerHeight >= window.innerWidth){
        return true;
    } 
    return false;
}