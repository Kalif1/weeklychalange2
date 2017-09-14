var menuBackgroundColor = document.getElementById('main-nav');

function testScroll(ek){
    if(window.pageYOffset>100){
    	menuBackgroundColor.style.backgroundColor = "transparent";
    }else if(window.pageYOffset<100){
    	menuBackgroundColor.style.backgroundColor ="#ffffff";
    }
}
window.onscroll=testScroll;


