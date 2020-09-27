// menu open 
let header = document.querySelector('.header__menu');
let menu = document.querySelectorAll('.header__nav__top');
let list = document.querySelectorAll('.header__nav__list');

if(menu) {
    menu.forEach((element, i) => {
        element.addEventListener('mouseenter', function() {
            list[i].classList.toggle('open');
    });
})};

if(list) {
    list.forEach((element, i) => {
        element.addEventListener('mouseleave', function() {
            list[i].classList.toggle('open');
    });
})};

// order open by click

let basket = document.querySelector('.header__basket');
let bTop = basket.querySelector('.header__basket_top');

bTop.onclick = function() {
    basket.classList.toggle('open');
};



// jQuerry 

//$(document).ready(function() { 

// открытие меню и корзины по клику
    // $('.header__nav__top').on('click', function(){
    //     $(this).next().fadeToggle(300)
    // });  
// ИЛИ 
    // function changeClassHeader(){
    //     $(this).prev().toggleClass('active')
    //     }
    //     $(function openMenu(){
    //         $('.header__nav__top').on('click', function(){
    //             $(this).next().slideToggle();
    //             $(this).toggleClass('active');
    //         });
    //     });
 
// открытие корзины при наведении 
    // $('#order-arrow').on('mouseenter', function(){
    //     $('.header__basket_list').fadeToggle(300)
    // });
    // $('.header__basket_list').on('mouseleave', function(){
    //     $(this).fadeToggle(300)
    // });

//увеличение элементов в фокусе > 1024px   
    // $('.promo__item').on('mouseenter', function() {
    //     $(this).animate({'width': '21vw'}, 1);
    //     $(this).animate({'height': '21vw'}, 1);
    // })

    // $('.promo__item').on('mouseleave', function() {
    //     $(this).animate({'width': '20vw'}, 1);
    //     $(this).animate({'height': '20vw'}, 1);
    // })

//});