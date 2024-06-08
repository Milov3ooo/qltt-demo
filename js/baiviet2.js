
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('addItemBtn').addEventListener('click', function() {
        var itemInput = document.getElementById('itemInput');
        var itemText = itemInput.value.trim();
        
        if (itemText !== "") {
            var watchlist = document.getElementById('newlist');

            var li = document.createElement('li');
            var link = document.createElement('a');
            link.href = itemText;
            link.target = "_blank";  // Mở liên kết trong tab mới
            link.textContent = itemText;

            var deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Xóa';
            deleteBtn.addEventListener('click', function() {
                watchlist.removeChild(li);
            });

            li.appendChild(link);
            li.appendChild(deleteBtn);
            newlist.appendChild(li);

            itemInput.value = '';
        }
    });
});