document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const mainContent = document.getElementById('main-content');
    const gallery = document.getElementById('gallery');
    const currentSelection = document.getElementById('current-selection');

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/800x450/adelaide-australia-temple-lds-866420-wallpaper.jpg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 98000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/800x500/anchorage-temple-lds-746769-wallpaper.jpg"},
        {
            templeName: "Albuqueque New Mexico",
            location: "Albuqueque, New Mexico",
            dedicated: "2000, March, 4",
            area: 78000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/800x800/albuquerque-temple-lds-820684-wallpaper.jpg"},
        {
            templeName: "Arequipa Perú",
            location: "Arequipa, Perú",
            dedicated: "2017, March, 4",
            area: 120000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/800x500/2-3c2316607190934fc0265f4107b5013b0cc4b21e.jpeg"}

    ];

    const filterTemples = (criteria) => {
        gallery.innerHTML = '';
        let filteredTemples;
        switch (criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(', ').slice(1).join('-')) < new Date('1900 -01-01'));
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(', ').slice(1).join('-')) >= new Date('2000-01-01'));
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 20000);

                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area <= 10000);
                break;
            default:
                filteredTemples = temples;
                break;
        }
        displayTemples(filteredTemples);
    };

    const updateHeader = (criteria) => {
        let headerText;
        switch (criteria) {
            case 'old':
                headerText = 'Old';
                break;
            case 'new':
                headerText = 'New';
                break;
            case 'large':
                headerText = 'Large';
                break;
            case 'small':
                headerText = 'Small';
                break;
            default:
                headerText = 'Home';
                break;
        }
        currentSelection.textContent = headerText;
    };




    const displayTemples = (temples) => {
        temples.forEach(temple => {
            const templeElement = document.createElement('div');
            templeElement.classList.add('gallery-item');
            templeElement.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p>${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}">
            `;
            gallery.appendChild(templeElement);
        });
    };

    // Initial display of all temples
    filterTemples('home');

    document.querySelectorAll('.nav-links a, .menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.getAttribute('data-filter');
            filterTemples(filter);
        });
    });

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('open');
        if (navLinks.classList.contains('show')) {
            mainContent.style.marginTop = '40%';
        } else {
            mainContent.style.marginTop = '0';
        }
    });

  
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
    
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
            mainContent.style.marginTop = '0';
        }
    });
});

