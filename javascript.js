
function filterOperation(){

    var a = document.getElementById("filterContent");
    var b = document.getElementById("Filter-1");

    if(a.style.display == "block"){
        a.style.display = "none";
    }
    else{
        a.style.display = "block";
    }

}


function mainMenu(){
    var z = document.getElementById("Menu-1");
    z.style.display = "block"  
}

function mainMenuHide(){
    var x = document.getElementById("Menu-1");
   x.style.display = "none";
}

function newMember(){
    var m = document.getElementById("add-user");
    m.style.display = "flex";
}

function newMemberHide(){
    var x = document.getElementById("add-user");
   x.style.display = "none";
}

