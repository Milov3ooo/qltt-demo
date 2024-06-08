document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line', // Loại biểu đồ (bar, line, pie, etc.)
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Số lượng bài viết mới',
                data: [100,290,200,300,150,459,509,784,638,700,802,989],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Mô phỏng dữ liệu thông báo có sẵnnn
    var notifications = [
        "Cập nhật phần mềm mới đã sẵn sàng.",
        "Đã ghi nhận sự thay đổi từ IP: 192.168.1.1.",
        "Yêu cầu hỗ trợ mới từ người dùng JohnDoe.",
        "Có sự xâm nhập bất thường từ IP: 192.162.2.34",
        "Bài viết ' MSI Liên Minh Huyền Thoại chính thức cập nhật 17.2 ' đang chờ duyệt.",
        "Bảo trì hệ thống vào ngày 15/06."
    ];

    var notificationsList = document.getElementById('notificationsList');
    notifications.forEach(function(notification) {
        var li = document.createElement('li');
        li.textContent = notification;
        notificationsList.appendChild(li);
    });
});