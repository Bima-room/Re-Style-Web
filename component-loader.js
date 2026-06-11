document.addEventListener("DOMContentLoaded", function () {
  // 1. Panggil dan Masukkan Navbar
  const navbarContainer = document.getElementById("navbar-component");
  if (navbarContainer) {
    fetch("navbar.html")
      .then((response) => response.text())
      .then((data) => {
        navbarContainer.innerHTML = data;
        aturMenuAktif(); // Menyalakan fungsi penanda halaman aktif
      });
  }

  // 2. Panggil dan Masukkan Footer
  const footerContainer = document.getElementById("footer-component");
  if (footerContainer) {
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => {
        footerContainer.innerHTML = data;
      });
  }
});

// Fungsi otomatis untuk mendeteksi halaman mana yang sedang aktif
function aturMenuAktif() {
  const lokasiHalaman = window.location.pathname;

  if (lokasiHalaman.includes("katalog.html")) {
    document.getElementById("nav-katalog").classList.add("active");
  } else {
    // Default jika di halaman utama/beranda
    document.getElementById("nav-beranda").classList.add("active");
  }
}
