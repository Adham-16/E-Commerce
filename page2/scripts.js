document.querySelectorAll('.nav-item.dropdown').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.querySelector('.mega-menu').style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
      item.querySelector('.mega-menu').style.display = 'none';
    });
  });

document.getElementById("toggle-sidebar").addEventListener("click", function() {
  document.getElementById("sidebar").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleSidebar = document.getElementById("toggle-sidebar");
  const closeSidebar = document.getElementById("close-sidebar");

  // Open sidebar when the toggle button is clicked
  toggleSidebar.addEventListener("click", () => {
      sidebar.classList.add("active");
  });

  // Close sidebar when the close button inside the sidebar is clicked
  closeSidebar.addEventListener("click", () => {
      sidebar.classList.remove("active");
  });
});

