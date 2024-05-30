document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const gallery = document.getElementById('res-grid');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

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
            templeName: "Albuquerque New Mexico",
            location: "Albuquerque, New Mexico",
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

    createTempleCard(temples);

    const filters = {
        home: () => temples,
        old: () => temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900),
        new: () => temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000),
        large: () => temples.filter(temple => temple.area > 90000),
        small: () => temples.filter(temple => temple.area < 10000)
    };

    document.querySelectorAll('[data-filter]').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = link.getAttribute('data-filter');
            clearTempleCards();
            createTempleCard(filters[filter]());
        });
    });

    function createTempleCard(filteredTemples) {
        filteredTemples.forEach(temple => {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");

            name.textContent = temple.templeName;
            location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
            dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
            area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(img);

            document.querySelector(".res-grid").appendChild(card);
        });
    }

    function clearTempleCards() {
        document.querySelector(".res-grid").innerHTML = "";
    }
  
    
    
    
    






























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

