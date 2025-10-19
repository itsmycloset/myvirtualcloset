// clothes.js - handles clothes data and gallery

// Global clothes list
let clothesList = [];

// Function to add a new clothing item
function addClothes(imgSrc, details) {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
        clothesList.push({img: img, details: details});
        updateGallery();
    };
}

// Update clothes gallery (for browse.html)
function updateGallery() {
    const gallery = document.getElementById('clothesGallery');
    if (!gallery) return;
    gallery.innerHTML = '';
    clothesList.forEach(cloth => {
        const div = document.createElement('div');
        div.className = 'clothes-thumb';
        div.style.backgroundImage = `url(${cloth.img.src})`;
        div.onclick = () => {
            alert(`Type: ${cloth.details.type}\nSize: ${cloth.details.size}\nFit: ${cloth.details.fit}\nColor: ${cloth.details.color}\nSeason: ${cloth.details.season}\nMaterial: ${cloth.details.material}\nStyle: ${cloth.details.style}\nNotes: ${cloth.details.notes}`);
        };
        gallery.appendChild(div);
    });
}

// Example function for questionnaire (can expand later)
function askClothesDetails(imgSrc) {
    const type = prompt('Type (e.g., Shirt, Pants, Coat):');
    const size = prompt('Size:');
    const fit = prompt('Fit (e.g., Loose, Tight, Regular):');
    const color = prompt('Color:');
    const season = prompt('Season (e.g., Summer, Winter):');
    const material = prompt('Material:');
    const style = prompt('Style:');
    const notes = prompt('Any notes?');
    addClothes(imgSrc, {type, size, fit, color, season, material, style, notes});
}

// Optional: auto-add placeholder clothes for demo
addClothes('images/sample_cloth.png', {
    type: 'Shirt',
    size: 'M',
    fit: 'Regular',
    color: 'Pink',
    season: 'Spring',
    material: 'Cotton',
    style: 'Casual',
    notes: ''
});
