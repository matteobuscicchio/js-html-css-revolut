$(document).ready(function(){
    
    const navBarSelector = $('.selettori');
    const hiddenMenu = $('.subMenu');
    navBarSelector.click(function () {
        let showMenu = $(this).index();
        console.log(showMenu);
        hiddenMenu.removeClass('active');
        $(hiddenMenu[showMenu]).addClass('active');
    });
    
});