// Nav Scroll 
var nilaiScroll = window.pageYOffset;
window.onscroll = function() {
    var nilaiSetelahScroll = window.pageYOffset;
    if (nilaiScroll > nilaiSetelahScroll) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    nilaiScroll = nilaiSetelahScroll;
}

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('#navMobile ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide')
});