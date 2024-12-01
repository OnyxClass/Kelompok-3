// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika elektronik menu di klik
document.querySelector("#elektronik-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const elektronik = document.querySelector("#elektronik-menu");

document.addEventListener("click", function (e) {
  if (!elektronik.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

let totalBelanja = 0;
let jumlahBarang = 0;

function tambahKeKeranjang(harga) {
    totalBelanja += harga; // Tambah harga barang ke total belanja
    jumlahBarang++; // Increment jumlah barang yang dibeli

    // Update tampilan total belanja dan jumlah barang
    document.getElementById("total-belanja").innerText = "Total Belanja: Rp " + totalBelanja.toLocaleString();
    alert("Barang telah ditambahkan ke keranjang! Total barang: " + jumlahBarang);

    // Tampilkan tombol cetak struk
    document.getElementById("cetak-struk").style.display = "inline-block";
}

function cetakStruk() {
    const struk = `
        Struk Pembelian
        ------------------------
        Jumlah Barang: ${jumlahBarang}
        Total Belanja: Rp ${totalBelanja.toLocaleString()}
        ------------------------
        Terima kasih telah berbelanja!
    `;

    // Untuk mencetak struk, kita bisa menggunakan window.print() atau menampilkan struk di jendela baru
    const newWindow = window.open('', '', 'height=400,width=600');
    newWindow.document.write('<pre>' + struk + '</pre>');
    newWindow.document.close(); // Close the document
    newWindow.print(); // Print the document
    newWindow.close(); // Close the new window after printing
}
