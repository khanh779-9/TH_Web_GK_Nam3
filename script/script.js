document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("ul");

  // Toggle menu khi click vào nút
  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
    menu.classList.toggle("active");
  });

  // Ngăn click trong menu làm ẩn nó
  menu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Khi click ra ngoài => ẩn menu
  document.addEventListener("click", function () {
    menu.classList.remove("active");
  });

  // Khi cuộn trang => ẩn menu
  window.addEventListener("scroll", function () {
    menu.classList.remove("active");
  });
});
