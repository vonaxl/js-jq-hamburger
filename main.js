// display the hamburger-menu on click
$("header .header-right>a").click(function() {
    $(".hamburger-menu").css("display","block")
});
// hide the hamburger menu on click
$("header .hamburger-menu>a").click(function() {
    $(".hamburger-menu").css("display","none")
});