document.addEventListener('click', function(e){
    let body = document.querySelector('body');

    /*Add Bullet */
    let bullet = document.createElement('span');    
    bullet.classList.add('bullet');
    let x = e.offsetX;
    let y = e.offsetY;
    bullet.style.left= x+'px';
    bullet.style.top= y+'px';

    body.appendChild(bullet);
    

    /*Add Sound */
    let sound = document.getElementById('sound');
    sound.play();

     /*Add Blood Bg */
     let images = [       
        'url("images/blood.png")',
        'url("images/blood2.png")',
        'url("images/blood3.png")',
        'url("images/blood4.png")',
        'url("images/blood4.png")'
    ];
     let bg = images[Math.floor(Math.random() * images.length )];
    
     
    
    
    /*Add Blood */
    let blood = document.createElement('span');
    blood.classList.add('blood');
    blood.style.left= x+'px';
    blood.style.top= y+'px';
    body.appendChild(blood);
    blood.style.backgroundImage = bg;

    let bgimages = [       
        'url("images/bg.jpeg")',
        'url("images/bg2.jpeg")',
        'url("images/bg3.jpg")',
        'url("images/bg4.jpg")',
        'url("images/bg5.jpg")',
        'url("images/bg6.jpg")'
    ];
    let backBG = bgimages[Math.floor(Math.random() * bgimages.length )];
    let mainbg = document.querySelector('section');
    mainbg.classList.add('mainbg');
    mainbg.style.backgroundImage = backBG;


/*Remove Element*/
    setTimeout(function(){
        bullet.remove();
        blood.remove();
    },4000);
})