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