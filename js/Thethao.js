    function submitReview(event) {
    event.preventDefault();
    var articleTitle = document.getElementById('articleTitle').value;
    var rating = document.getElementById('rating').value;
    var comments = document.getElementById('comments').value;

    // Logic to save review and comments can be added here

    document.getElementById('reviewForm').reset();
    document.getElementById('confirmationMessage').style.display = 'block';
}
function rateWebsite(websiteName) {
    document.getElementById('websiteName').value = websiteName;
    document.getElementById('ratingForm').style.display = 'block';
    document.getElementById('confirmationMessage').style.display = 'none';
}

function submitRating(event) {
    event.preventDefault();
    var websiteName = document.getElementById('websiteName').value;
    var rating = document.getElementById('rating').value;
    var comments = document.getElementById('comments').value;

    // Logic to save rating and comments can be added here

    document.getElementById('ratingForm').reset();
    document.getElementById('ratingForm').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
    
}
    document.addEventListener('DOMContentLoaded', (event) => {
    const adContainer = document.getElementById('adContainer');
    let isDragging = false;
    let startX, startY, initialX, initialY;

    adContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialX = adContainer.offsetLeft;
        initialY = adContainer.offsetTop;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        if (!isDragging) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        let newX = initialX + dx;
        let newY = initialY + dy;

        // Get the footer element and its position
        const footer = document.querySelector('.main');
        const footerRect = footer.getBoundingClientRect();
        const adRect = adContainer.getBoundingClientRect();

        // Prevent moving the ad container below the footer
        if (newY + adRect.height > footerRect.top) {
            newY = footerRect.top - adRect.height;
        }

        adContainer.style.left = `${newX}px`;
        adContainer.style.top = `${newY}px`;
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
});
