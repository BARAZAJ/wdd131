function updateFooterContent() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = `${currentYear}`;
 
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
}


document.addEventListener('DOMContentLoaded', updateFooterContent);




function toggleMobileNav() {
    var mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('is-active');
}


    


















