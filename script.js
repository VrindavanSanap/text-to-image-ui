function escapeText(text) {
    // Replace spaces with a hyphen
    return text.replace(/\s+/g, '-');
}

function generateImage() {
    const text = document.getElementById('textInput').value;
    const imageContainer = document.getElementById('imageContainer');

    if (!text) {
        alert('Please enter some text');
        return;
    }

    // Show loading gif over previous image without replacing it
    const loadingGif = document.createElement('img');
    loadingGif.src = 'https://vrindavansanap.github.io/mnist-visualization-web/apple_loading.gif';
    loadingGif.alt = 'Loading...';
    loadingGif.width = 100;
    loadingGif.height = 100;
    loadingGif.style.position = 'absolute';
    loadingGif.style.top = '50%';
    loadingGif.style.left = '50%';
    loadingGif.style.transform = 'translate(-50%, -50%)';
    imageContainer.appendChild(loadingGif);

    // Fetch the image
    fetch(`https://texttoimageapp.vrdvn.workers.dev/?prompt=${escapeText(text)}`)
        .then(response => response.blob())
        .then(blob => {
            // Clear previous image if exists
            imageContainer.innerHTML = '';
            const img = document.createElement('img');
            img.style.webkitUserSelect = 'none';
            img.style.display = 'block';
            img.style.margin = 'auto';
            img.style.padding = 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)';
            img.style.cursor = 'zoom-in';
            img.width = 547;
            img.height = 547;
            img.src = URL.createObjectURL(blob);
            imageContainer.appendChild(img);
        })
        .catch(error => {
            console.error('Error fetching the image:', error);
        });
}
window.onload = function () {
    generateImage()
};
