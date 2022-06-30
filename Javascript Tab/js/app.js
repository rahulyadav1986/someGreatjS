let tab_box = document.querySelectorAll('.tab_box');
let contenrarea = document.querySelectorAll('.contenrarea');


for(let i=0; i<tab_box.length; i++){
    tab_box[i].addEventListener('click', function(){
        for(let i=0; i<contenrarea.length; i++){
            contenrarea[i].className= 'contenrarea';
        }
        document.getElementById(this.dataset.id).className = 'contenrarea active';
        for(let i=0; i<tab_box.length; i++){
            tab_box[i].className= 'tab_box';
            this.className = 'tab_box active';
        }
    })
}