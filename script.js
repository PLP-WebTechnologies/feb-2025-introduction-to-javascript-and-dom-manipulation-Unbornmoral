// JavaScript for DOM manipulation

document.addEventListener('DOMContentLoaded', function() {
    // Change text content dynamically
    const text = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    changeTextBtn.addEventListener('click', function() {
        text.textContent = 'The text has been changed!';
        text.style.color = 'blue'; // Modify CSS style
        text.style.fontWeight = 'bold';
    });

    // Add or remove an element when a button is clicked
    const toggleBoxBtn = document.getElementById('toggle-box-btn');
    let box = null;
    toggleBoxBtn.addEventListener('click', function() {
        if (!box) {
            box = document.createElement('div');
            box.id = 'dynamic-box';
            box.textContent = 'I am a dynamically added box!';
            box.style.background = '#f0ad4e';
            box.style.padding = '16px';
            box.style.marginTop = '10px';
            document.querySelector('section').appendChild(box);
        } else {
            box.remove();
            box = null;
        }
    });
});
