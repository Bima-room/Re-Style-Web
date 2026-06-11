document.addEventListener("DOMContentLoaded", function () {
  // 1. Panggil dan Masukkan Navbar
  const navbarContainer = document.getElementById("navbar-component");
  if (navbarContainer) {
    fetch("navbar.html")
      .then((response) => response.text())
      .then((data) => {
        navbarContainer.innerHTML = data;
      })
      .catch((err) => console.log("Gagal memuat navbar:", err));
  }

  // 2. Panggil dan Masukkan Footer
  const footerContainer = document.getElementById("footer-component");
  if (footerContainer) {
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => {
        footerContainer.innerHTML = data;
      })
      .catch((err) => console.log("Gagal memuat footer:", err));
  }
});
