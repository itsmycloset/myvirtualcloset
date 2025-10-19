// main.js - handles avatar and try-on canvas

const avatarCanvas = document.getElementById('avatarCanvas');
const ctx = avatarCanvas.getContext('2d');
const avatarUpload = document.getElementById('avatarUpload');
const clothesUpload = document.getElementById('clothesUpload');
const clothesThumbnails = document.getElementById('clothesThumbnails');

let avatarImg = new Image();
let layers = []; // array of clothes layers

// Draw function
function drawCanvas() {
    ctx.clearRect(0, 0, avatarCanvas.width, avatarCanvas.height);
    if(avatarImg.src) ctx.drawImage(avatarImg, 0, 0, avatarCanvas.width, avatarCanvas.height);
    layers.forEach(layer => {
        ctx.drawImage(layer.img, layer.x || 0, layer.y || 0, layer.width || avatarCanvas.width, layer.height || avatarCanvas.height);
    });
}

// Avatar upload
avatarUpload.addEventListener('change', e => {
    const file = e.target.files[0];
    if(!file) return;
    avatarImg.src = URL.createObjectURL(file);
    avatarImg.onload = () => drawCanvas();
});

// Clothes upload
clothesUpload.addEventListener('change', e => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
            const layer = {img: img, x:0, y:0, width: avatarCanvas.width, height: avatarCanvas.height};
            layers.push(layer);
            drawCanvas();
            // create thumbnail
            const thumb = document.createElement('div');
            thumb.className = 'clothes-thumb';
            thumb.style.backgroundImage = `url(${img.src})`;
            thumb.onclick = () => alert('Cloth details: You can add questionnaire later');
            clothesThumbnails.appendChild(thumb);
        };
    });
});
