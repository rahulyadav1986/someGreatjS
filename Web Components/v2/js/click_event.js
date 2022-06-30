let button = document.getElementsByClassName('button');
let teamCard= document.getElementsByClassName('team_card');
let cross= document.getElementsByClassName('close');
for(let i=0; i<button.length; i++){
    button[i].addEventListener('click', function(item){
        for(let i=0; i<teamCard.length; i++){
            if(item !== teamCard){
                teamCard[i].classList.remove('active');
            }  
        }
        teamCard[i].classList.toggle('active');
    });
}
for(let i=0; i<cross.length; i++){
    cross[i].addEventListener('click', function(item){
        for(let i=0; i<teamCard.length; i++){
            if(item !== teamCard){
                teamCard[i].classList.remove('active');
            }  
        }
    })
}

/*export{};*/
