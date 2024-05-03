
function updateFooterContent() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = `${currentYear}`;
 
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
}


updateFooterContent();

const article = document.querySelector('article');

article.innerHTML = 'innerHTML supports <strong>HTML </string> tags. The textContent property does not '

article.style.textAlign= 'left'
article.append(paragraph, 'Hello world')















