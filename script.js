$("classname:first").addClass("current_menu_items").show(); //Activate first tab
//On Click Event
$("classname").click(function () {
    $("classname").removeClass("current_menu_items");
    $(this).addClass("current_menu_items");

});

window.addEventListener('load', function () {
    var load_screen = document.getElementById('load_screen');
    document.body.removeChild(load_screen);
})

$('.mobile-menu').slicknav({
    label: '',
    prependTo: 'header .bottom .container',
    closedSymbol: '+',
    openedSymbol: '-',
    init: function () {
        /*$('.slicknav_nav').find('ul').removeClass('dropdown-nav');
        $('.slicknav_nav').find('li').removeClass('dropdown-show');
        $('.slicknav_nav').find('a').removeClass('arrow-toggle');*/
    }
});

jQuery('#chemical-slider').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            dots: false,
            nav: true
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});


var toggler = document.querySelectorAll(".menu li a");
var span = document.querySelectorAll("span");


for (var i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener('click', function () {
        this.parentElement.querySelector(".menu li ul").classList.toggle("active");
        span.classList.toggle("caret-down");
    })
}


function chnageContent(getValue){
    let background = document.querySelector('.bgcolor');
    let selectOption = getValue.value;
    background.style.background = selectOption;
        
    let selecttext = document.querySelector('.card');
    let textValue = getValue.options[getValue.selectedIndex].text;    
    selecttext.innerHTML = textValue;

}