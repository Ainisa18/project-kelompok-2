function daftar_kendaraan() {
    let nim = document.getElementById("nim").value;
    let nimregex = /^\d{10,}$/;
    if (!nimregex.test(nim)) {
        alert('NIM/NIDN harus berupa angka dan minimal 10 digit');
        return false;
    }

    let nama = document.getElementById("nama").value;
    if (nama.length === 0 || nama.length > 30) {
        alert('Nama lengkap harus diisi dan maksimum 30 karakter');
        return false;
    }

    let nopol = document.getElementById("nomor").value;
    let nopolregex = /^[a-zA-Z0-9\s]+$/;
    if (!nopolregex.test(nopol)) {
        alert('Nomor polisi harus mengandung huruf dan angka serta tidak boleh ada spasi');
        return false;
    }

    let merk = document.getElementById("merk").value;
    if (merk.length === 0 || merk.length > 20) {
        alert('Merk harus diisi dan maksimum 20 karakter');
        return false;
    }

    window.alert("Berhasil Mendaftar");
}
