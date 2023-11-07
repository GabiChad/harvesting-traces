// fading of palestinian middle design
function fadeImage() {
    const image = document.getElementById('unfold-green');
    let fadingIn = true;

    setInterval(function () {
        if (fadingIn) {
            image.style.opacity = '1';
            fadingIn = false;
        } else {
            image.style.opacity = '0.3'; // Adjust the desired opacity when fading out
            fadingIn = true;
        }
    }, 2000); // Adjust the interval (in milliseconds) as needed
}

fadeImage();

// draggable team icons

function navigateToNewPage(url) {
    window.location.href = url;
}

const draggableItems = document.querySelectorAll('.draggable-item');
let activeItem = null;

draggableItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
    activeItem = this;
    e.dataTransfer.setData('text/plain', ''); // Necessary for Firefox
}

function dragEnd() {
    activeItem = null;
}

document.addEventListener('mousemove', (e) => {
    if (!activeItem) return;
    const x = e.clientX;
    const y = e.clientY;
    activeItem.style.left = x + 'px';
    activeItem.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
    activeItem = null;
});