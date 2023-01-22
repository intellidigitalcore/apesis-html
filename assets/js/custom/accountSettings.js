// toggle password 
var clicked = 0;

$(".toggle-password").click(function (e) {
    e.preventDefault();

    $(this).toggleClass("toggle-password");
    if (clicked == 0) {
        $(this).html(`<span class="material-icons"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.75 3.125L16.25 16.875" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.1022 12.3125C11.5287 12.8379 10.7784 13.128 10.0006 13.125C9.36991 13.1249 8.75396 12.934 8.23377 12.5773C7.71358 12.2206 7.31349 11.7149 7.08611 11.1266C6.85873 10.5383 6.81469 9.8949 6.95979 9.28109C7.1049 8.66728 7.43234 8.11173 7.89908 7.6875" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.78125 5.35938C2.59375 6.96875 1.25 10 1.25 10C1.25 10 3.75 15.625 10 15.625C11.4645 15.6369 12.9108 15.2995 14.2188 14.6406" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.2969 13.211C18 11.6875 18.75 10 18.75 10C18.75 10 16.25 4.37502 10 4.37502C9.45817 4.37395 8.91721 4.41838 8.38281 4.50783" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5859 6.93018C11.2505 7.05609 11.8561 7.39476 12.3113 7.89506C12.7665 8.39535 13.0466 9.03014 13.1094 9.70361" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></span >`);
        clicked = 1;
    } else {
        $(this).html(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4.375C3.75 4.375 1.25 10 1.25 10C1.25 10 3.75 15.625 10 15.625C16.25 15.625 18.75 10 18.75 10C18.75 10 16.25 4.375 10 4.375Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z" stroke="#757575" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `);
        clicked = 0;
        }

    var input = $($(this).siblings("input"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});


// toggle acount info 
$(".show-more").click(function(e) {
    e.preventDefault();

    // console.log($(this).children("#show-more-span").text());
    var innerText = $(this).children("#show-more-span").text()
    // console.log(innerText);
    if(innerText == "Show more"){
        $(this).children("#show-more-span").html("Show less")
        $(this).find('#show-icon').addClass("rotate-180")
    }else{
        $(this).children("#show-more-span").html("Show more")
        $(this).find('#show-icon').removeClass("rotate-180")
    }

    $(this).parent().parent().parent().siblings("#extend-info").slideToggle( "slow", function() {
    })
})
