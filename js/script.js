// const body = document.querySelector ('body')
// const checkBox = document.querySelector ('.header__nav__check')
// const menu = document.querySelector ('.header__nav__list')

// if (body && checkBox) {
//     body.addEventListener('click', function() {
//     if(checkBox.checked){
//         checkBox.checked = false;
//         }
//     })
//     menu.addEventListener('click', function(e) {
//         e.stopPropagation()
//     })
// }

// $('header__nav').slideUp(2000).slideDown(2000);

// if (body && checkBox) {
//     if(checkBox.checked){
//         menu.hide('3000')
//     }
// }

// $('.header__nav__check').click(
//     function a() {
//         $('header__nav__list').show(3000)  
//     }
// )

// $('.header__nav__top').click(function open () {
//     $('.header__nav__list').slideDown(2000).slideUp(2000)
// })

function changeClassHeader(){
    $(this).prev().toggleClassHeader('active')
    }
    $(function openMenu(){
        $('.header__nav__top').click(function(){
            $(this).next().slideToggle();
            $(this).toggleClass ('active');
        });
    })

    function changeClassOrder(){
        $(this).prev().toggleClassOrder('active')
        }
        $(function openMenu(){
            $('#order-arrow').click(function(){
                $('.header__basket_list').slideToggle();
                $(this).toggleClass ('active');
            });
        })