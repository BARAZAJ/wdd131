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
    const CollegeNameSelect = document.getElementById('CollegeName');
  
    colleges.forEach(college => {
        const option = document.createElement('option');
        option.value = college.id;
        option.textContent = college.name;
        CollegeNameSelect.appendChild(option);
    });
  };
  
  function updateFooterContent(){
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
  }
  
  updateFooterContent();
  
  
  
  
  
  
  
  