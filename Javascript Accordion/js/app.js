let accordion = document.getElementsByClassName('portion');
for(let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(item){
        for(let i=0; i<accordion.length; i++){
            if(item !== accordion){
                accordion[i].classList.remove('active');
            }
        }
        this.classList.toggle('active');
    });
    
    
}





