// Khởi tạo AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Xử lý form liên hệ (tùy chọn)
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ!');
    form.reset();
});
// Playful Cursor Effect
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section"); // Các phần tử có hiệu ứng

    // Hàm xử lý hiệu ứng khi cuộn
    const handleScroll = () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const inViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (inViewport) {
                // Phóng to nếu nằm giữa vùng hiển thị
                section.classList.add("grow");
                section.classList.remove("shrink");
            } else {
                // Thu nhỏ nếu ra khỏi vùng hiển thị chính
                section.classList.add("shrink");
                section.classList.remove("grow");
            }
        });
    };

    // Lắng nghe sự kiện cuộn trang
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Chạy một lần khi tải trang
});
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các liên kết trong menu
    const links = document.querySelectorAll(".navbar a");

    // Lắng nghe sự kiện click
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Ngăn mặc định
            const targetId = link.getAttribute("href").substring(1); // Lấy id mục tiêu
            const targetSection = document.getElementById(targetId);

            // Cuộn mượt đến mục tiêu
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });
});

