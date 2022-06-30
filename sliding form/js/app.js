var form = document.getElementById("form");
var bg = document.getElementById("bg");


function signupbutton(){ 
    form.classList.add("shift");
    bg.classList.add("bg_chnage")
} 
function signupbuttonMobile(){ 
    form.classList.add("shift");
    bg.classList.add("bg_chnage")
}

function signinbutton(){
    form.classList.remove("shift");
    bg.classList.remove("bg_chnage")
}
function signinbuttonMobile(){
    form.classList.remove("shift");
    bg.classList.remove("bg_chnage")
}