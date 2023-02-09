$( "#dashboard" ).click(function() {
    $( "#dashboard-menu" ).slideToggle( "slow", function() {
    });
    $("#dashboard-dropdown-icon").toggleClass("dropdown-icon-rotaion")
})

$( "#managment-pages" ).click(function() {
    $( "#pages-menus" ).slideToggle( "slow", function() {
    });
    $("#managment-dropdown-icon").toggleClass("dropdown-icon-rotaion")
})

$( "#managment-applications" ).click(function() {
    $( "#application-menus" ).slideToggle( "slow", function() {
    });
    $("#applications-dropdown-icon").toggleClass("dropdown-icon-rotaion")
})

$( "#managment-e-commerce" ).click(function() {
    $( "#e-commerce-menus" ).slideToggle( "slow", function() {
    });
    $("#e-commerce-dropdown-icon").toggleClass("dropdown-icon-rotaion")
})

$( "#managment-order" ).click(function() {
    $( "#orders-menus" ).slideToggle( "slow", function() {
    });
    $("#order-dropdown-icon").toggleClass("dropdown-icon-rotaion")
})


$( ".show-dropdown" ).click(function() {
    $(this).parent().find(".dropdown-item").toggle();
    $(this).parent().siblings().find(".dropdown-item").hide()
})

$( "#mobile-menu-trigger" ).click(function() {
    $( "#menu-bar" ).toggle(50);
})

// $( "#menu-bar" ).click(function() {
//     $( "#menu-bar" ).toggle(100);
//     // $(".dashboard").prop('disabled', true);
   
    
// })

// function toogleMenu(e){
//     e.preventDefault();
//     e.stopPropagation();
    
//     // $(".management").prop('disabled', true);
//     $(".dashboard").unbind("click", toogleMenu);
//     $( "#menu-bar" ).hide(100);
//     gotoNext();
// }
// $( "#menu-bar" ).click(toogleMenu);
