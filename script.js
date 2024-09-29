const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const closebutton = document.getElementById("close");

hamburger.addEventListener("click", () => {
  console.log("hamburger button clicked!");
  navLinks.classList.toggle("active"); // Toggle kelas 'active' untuk menampilkan/menyembunyikan menu
});

closebutton.addEventListener("click", () => {
  console.log("Close button clicked!");
  navLinks.classList.remove("active"); // Hapus kelas 'active' untuk menyembunyikan menu
});
