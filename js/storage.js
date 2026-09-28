
function saveXP(xp){
localStorage.setItem("shaunXP",xp);
}

function loadXP(){
return Number(localStorage.getItem("shaunXP")||0);
}
