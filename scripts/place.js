
function updateFooterContent() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = `${currentYear}`;
 
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
}

 // Function to display wind chill on page load
 window.onload = function() {
    const temperature = 20; // Static temperature value in °C
    const windSpeed = 10; // Static wind speed value in km/h
    const units = 'metric'; // Units for temperature and wind speed (metric or imperial)

    // Calculate wind chill using the function
    const windChill = calculateWindChill(temperature, windSpeed, units);

    // Display wind chill value on the webpage
    const windChillElement = document.getElementById('windChillValue');
    windChillElement.textContent = windChill;
};







   







