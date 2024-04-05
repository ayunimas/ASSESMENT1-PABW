let buku = [
    {"nama" : "hp", "jumlah":2},
    {"nama" : "fb", "jumlah":2},
    {"nama" : "bat", "jumlah":2}
];

document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();

    let jumlah = parseInt(document.getElementById("jumlah").value);
    let bukuTerpilih = document.getElementById("buku").value;

    if(isNaN(jumlah) || jumlah <= 0){
        alert("Jumlah Tidak Valid.");
        return;
    }

    let bukuDitemukan = buku.find(item => item.nama === bukuTerpilih);

    if (!bukuDitemukan){
        alert("Buku tidak ditemukan.");
        return;
    }

    if (jumlah > bukuDitemukan.jumlah){
        alert("Jumlah buku tidak tersedia");
        return;
    }

    alert("Silahkan ambil buku anda.");
});