
function updateFooterContent() {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = `${currentYear}`;
 
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
}
updateFooterContent();


// JavaScript file: place.js

// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed, units) {
    // Check if temperature and wind speed meet the conditions for wind chill calculation
    if (
        (units === 'metric' && temperature <= 10 && windSpeed > 4.8) ||
        (units === 'imperial' && temperature <= 50 && windSpeed > 3)
    ) {
        // Calculate wind chill based on units (°C or °F)
        if (units === 'metric') {
            return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        } else if (units === 'imperial') {
            return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        }
    } else {
        // Conditions not met for wind chill calculation
        return 'N/A';
    }
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







   







