document.getElementById('loadMore').addEventListener('click', function() {
    var hiddenItems = document.querySelectorAll('.news1-item.hidden');
    var itemsToShow = 2; // Số lượng mục tin tức sẽ hiển thị mỗi lần nhấn

    for (var i = 0; i < itemsToShow; i++) {
        if (hiddenItems[i]) {
            hiddenItems[i].classList.remove('hidden');
        }
    }

    // Ẩn nút nếu không còn mục tin tức nào bị ẩn
    if (document.querySelectorAll('.news1-item.hidden').length === 0) {
        this.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const goToTopButton = document.getElementById('go-to-top');

    window.addEventListener('scroll', () => {
        // Show or hide the button based on scroll position
        if (window.scrollY > 200) {
            goToTopButton.style.display = 'block';
        } else {
            goToTopButton.style.display = 'none';
        }
    });

    goToTopButton.addEventListener('click', () => {
        // Smoothly scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const goToBottomButton = document.getElementById('go-to-bottom');

    goToBottomButton.addEventListener('click', () => {
        // Smoothly scroll to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});
