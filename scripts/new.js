// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed, unit) {
    if (unit === 'metric' && temperature <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else if (unit === 'imperial' && temperature <= 50 && windSpeed > 3) {
        return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    } else {
        return 'N/A';
    }
}

// Function to display wind chill factor on page load
window.onload = function() {
    const temperature = 20; // Example temperature in Celsius
    const windSpeed = 10; // Example wind speed in km/h
    const unit = 'metric'; // Example unit (metric or imperial)

    const windChillValue = document.getElementById('windChillValue');
    const windChill = calculateWindChill(temperature, windSpeed, unit);

    windChillValue.textContent = (windChill !== 'N/A') ? windChill.toFixed(1) + '°' : windChill;
    
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModified').textContent = lastModified;
}
function toogleMenu(){
    menulinks.classList.toggle('show-menu');
}
window.onscroll = function(){
    if(window.scrollY >0){
        navbar.style.background = '#eefff9';
    }else{
        navbar.style.background = 'transparent';
    }
    }
