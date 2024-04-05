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

});