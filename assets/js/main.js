$(document).ready(function(){
    
    var navBarSelector = $('.selettori');
    var hiddenMenu = $('.subMenu');
    navBarSelector.click(function () {
        var showMenu = $(this).index();
        console.log(showMenu);
        hiddenMenu.removeClass('active');
        $(hiddenMenu[showMenu]).addClass('active');
    });
    
});