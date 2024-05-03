function updateFooterContent() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = `${currentYear}`;
 
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
}


updateFooterContent();


const mainnav = document.querySelector('.navigation1')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click',()=>{mainnav.classList.toggle('show');hambutton.classList.toggle('show');})















