const colleges = [
    {
        
        name: "BYUI IDAHO",
        
    },
    {
       
        name: "PATHWAYCONNECT"
        
    },
    {
    
        name: "ENSIGN COLLEGE"
        
    }
   
  ];
  
  window.onload = () => {
    const productNameSelect = document.getElementById('productName');
  
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
  };
  
  function updateFooterContent(){
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
  }
  
  updateFooterContent();
  
  
  
  
  
  
  
  