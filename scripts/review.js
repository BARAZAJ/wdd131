window.onload = () => {
       if (localStorage.getItem('reviewCounter') === null) {
           localStorage.setItem('reviewCounter', '0');
       }
       let reviewCounter = parseInt(localStorage.getItem('reviewCounter'), 10);
       reviewCounter += 1;
       localStorage.setItem('reviewCounter', reviewCounter.toString());
       document.getElementById('reviewCounter').innerText = reviewCounter;
   
       const lastModifiedElement = document.getElementById('LastModified');
       const lastModifiedDate = document.lastModified;
       lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
   };