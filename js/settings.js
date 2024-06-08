document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu một cách thông thường
    
    var formData = new FormData(this);
    
    fetch("/submit", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById("message").innerText = data; // Hiển thị thông báo xác nhận
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });