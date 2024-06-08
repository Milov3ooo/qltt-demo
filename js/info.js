
    // Populate day select
    const daySelect = document.getElementById('day');
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Populate month select
    const monthSelect = document.getElementById('month');
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        monthSelect.appendChild(option);
    }

    // Populate year select
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
const districtData = {
    'hcm': ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5'],
    'hn': ['Quận Hoàn Kiếm', 'Quận Hai Bà Trưng', 'Quận Đống Đa', 'Quận Ba Đình'],
    'tth': ['Quận Hương Thủy', 'Quận Phú Vang', 'Quận Phú Lộc'],
    'dn': ['Quận Hải Châu', 'Quận Thanh Khê', 'Quận Sơn Trà'],
    'gl': ['Huyện Chư Păh', 'Huyện Chư Pưh', 'Huyện Mang Yang'],
    'bn': ['Thị xã Từ Sơn', 'Thị xã Gia Bình', 'Huyện Thuận Thành']
};

// Lắng nghe sự kiện thay đổi trên select box tỉnh/thành phố
document.getElementById('city').addEventListener('change', function() {
    var city = this.value;
    var districtSelect = document.getElementById('district');
    
    // Xóa tất cả các option cũ trong select quận/huyện
    districtSelect.innerHTML = '<option value="" disabled selected>Chọn quận/huyện</option>';

    // Nếu người dùng chọn một tỉnh/thành phố
    if (city !== "") {
        // Lấy danh sách quận/huyện tương ứng với tỉnh/thành phố đã chọn
        var districts = districtData[city];

        // Thêm các quận/huyện vào select box
        districts.forEach(function(district) {
            var option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
    function showMessage() {
        // Tạo một phần tử mới để hiển thị thông báo
        var messageElement = document.createElement('div');
        messageElement.innerText = "Đã lưu thông tin";
        messageElement.style.color = "green";
        messageElement.style.marginTop = "20px";

        // Thêm phần tử thông báo vào body
        document.body.appendChild(messageElement);

        // Tùy chọn: Ẩn thông báo sau một khoảng thời gian
        setTimeout(function() {
            messageElement.style.display = 'none';
        }, 3000); // 3000ms = 3 giây
    }
});
