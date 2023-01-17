$(function(){
    $("#includeBackground").load("background.html"); 
});
var open = false;
function toggle(){
    if (open){
        //close
        open = false;
    }else{
        //open
        open = true;
        $("#bar-v").css("height","0");
        $("#bar-v").css("margin-top","50%");
    }
}