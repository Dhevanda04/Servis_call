document.getElementById("serviceForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const hp = document.getElementById("hp").value;
    const jenis = document.getElementById("jenis").value;
    const kendala = document.getElementById("kendala").value;

    // GANTI DENGAN NOMOR WA KAMU (pakai kode negara)
    const nomorWA = "+6285713654631";

    const pesan = `Halo Admin Service 👋%0A%0A` +
        `Nama: ${nama}%0A` +
        `No HP: ${hp}%0A` +
        `Perangkat: ${jenis}%0A` +
        `Kendala: ${kendala}%0A%0A` +
        ``;

    const url = `https://wa.me/${nomorWA}?text=${pesan}`;
    window.open(url, "_blank");
});