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