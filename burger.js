let burgerHeader = document.querySelector('.burger-menu-header');
let burgerBody = document.querySelector('.burger-menu-body');
let burgerStatus = 'burger-menu-body_active'



let select = function (head, body, status) {

    head.addEventListener('click', function () {
        body.classList.toggle(status);
    });


    document.addEventListener('click', e => {
        let target = e.target;
        let its_menu = target == body || body.contains(target);
        let its_burger = target == head || head.contains(target);       
        let menu_is_active = body.classList.contains(status);


        if (!its_menu && !its_burger && menu_is_active) {
            body.classList.toggle(status);
        }
    });
};

select(burgerHeader,burgerBody,burgerStatus)

$('.project-info').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
  });





