let navbar = document.querySelector('nav');
let menulinks = document.getElementById("menu-links");


function toogleMenu(){
    menulinks.classList.toggle('show-menu');
}



function updateFooterContent() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = `${currentYear}`;
 
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
}


document.addEventListener('DOMContentLoaded', updateFooterContent);






window.onscroll = function(){
    if(window.scrollY >0){
        navbar.style.background = '#eefff9';
    }else{
        navbar.style.background = 'transparent';
    }
    }










