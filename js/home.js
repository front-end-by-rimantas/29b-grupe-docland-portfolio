/* Header Area Start */
window.onscroll = function() { myFunction() };
var header = document.getElementById("header");
var button = document.getElementById("download_sticky");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky") & button.classList.add("download_sticky");
    } else {
        header.classList.remove("sticky") & button.classList.add("download_sticky");
    }
}
/* Header Area End */