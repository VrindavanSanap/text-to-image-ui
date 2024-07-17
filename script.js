function escapeText(text) {
    // Remove spaces if desired, or replace spaces with a hyphen
    text = text.replace(/\s+/g, '-');


    // Split the text into an array of characters, then join with hyphens
    return text
}

function generateImage() {
    const text = document.getElementById('textInput').value;
    const imageContainer = document.getElementById('imageContainer');

    if (!text) {
        alert('Please enter some text');
        return;
    }

    // Clear previous image if exists
    imageContainer.innerHTML = `<img style="-webkit-user-select: none; display: block; margin: auto; padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left); cursor: zoom-in;" src="https://texttoimageapp.vrdvn.workers.dev/?prompt=${escapeText(text)}" width="547" height="547">`;
    
    // Create a canvas element
 
}
