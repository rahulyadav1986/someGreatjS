function crackbutton(){
    var crackSkin = document.getElementById("smoothskin");
    var smoothSkin = document.getElementById("crackskin");
    var button_class_add = document.getElementById("add_class");
    var crack = document.getElementById("crack");

    crackSkin.classList.toggle("on");
    smoothSkin.classList.toggle("on");
    button_class_add.classList.toggle("change");
    crack.classList.toggle("crack")
}