const body = document.querySelector('body');
const clickPlace = document.querySelectorAll('.header__nav__top');
const list = document.querySelectorAll('.header__nav__list');

if (clickPlace) {
    clickPlace.forEach((element, i) => {
    element.addEventListener('click', function() { 
        list[i].classList.toggle('header__basket_list_on');
    });
})};


$(document).ready(function() {

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
    $('#order-arrow').on('mouseenter', function(){
        $('.header__basket_list').fadeToggle(300)
    });
    $('.header__basket_list').on('mouseleave', function(){
        $(this).fadeToggle(300)
    });

//увеличение элементов в фокусе    
    // $('.promo__item').on('mouseenter', function() {
    //     $(this).animate({'width': '21vw'}, 1);
    //     $(this).animate({'height': '21vw'}, 1);
    // })

    // $('.promo__item').on('mouseleave', function() {
    //     $(this).animate({'width': '20vw'}, 1);
    //     $(this).animate({'height': '20vw'}, 1);
    // })

    

// SEREJIN PLAN
// const body = document.querySelector ('body')
// const clickPlace = document.querySelector ('.header__nav__top')
// const list = document.querySelector ('.header__nav__list')

// if (body && clickPlace) {
//     body.addEventListener('click', function() {
//     if(clickPlace.click){
//         list = false;
//         }
//     })
//     list.addEventListener('click', function(e) {
//         e.stopPropagation()
//     })
// }

});