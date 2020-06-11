
$(document).ready(function(){
    $('.slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        asNavFor: '.slide_contents'
    });
    $('.slide_contents').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        asNavFor: '.slider_for',
        prevArrow: $('.mainLeftArrow'),
        nextArrow: $('.mainRightArrow')
    });
    $('.banner_slides').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        autoplay: true
    })

// > 포트폴리오 매뉴

//메뉴
const allmenu = document.getElementById('allmenu');
const webmenu = document.getElementById('webmenu');
const designmenu = document.getElementById('designmenu');
const ectmenu = document.getElementById('ectmenu');
//리스트
const all = document.getElementById('all');
const web = document.getElementById('web');
const design = document.getElementById('design');
const ect = document.getElementById('ect');

function allmenuClickEvent(){
    all.style.display = "block";
    web.style.display = "none";
    design.style.display = "none";
    ect.style.display = "none";

    $('#allmenu').addClass("on");
    $('#webmenu').removeClass("on");
    $('#designmenu').removeClass("on");
    $('#ectmenu').removeClass("on");
}
function webmenuClickEvent(){
    all.style.display = "none";
    web.style.display = "block";
    design.style.display = "none";
    ect.style.display = "none";
    
    $('#allmenu').removeClass("on");
    $('#webmenu').addClass("on");
    $('#designmenu').removeClass("on");
    $('#ectmenu').removeClass("on");
}
function designmenuClickEvent(){
    all.style.display = "none";
    web.style.display = "none";
    design.style.display = "block";
    ect.style.display = "none";
        
    $('#allmenu').removeClass("on");
    $('#webmenu').removeClass("on");
    $('#designmenu').addClass("on");
    $('#ectmenu').removeClass("on");
}
function ectmenuClickEvent(){
    all.style.display = "none";
    web.style.display = "none";
    design.style.display = "none";
    ect.style.display = "block";

    $('#allmenu').removeClass("on");
    $('#webmenu').removeClass("on");
    $('#designmenu').removeClass("on");
    $('#ectmenu').addClass("on");
}

allmenu.addEventListener("click", allmenuClickEvent);
webmenu.addEventListener("click", webmenuClickEvent);
designmenu.addEventListener("click", designmenuClickEvent);
ectmenu.addEventListener("click", ectmenuClickEvent);


});