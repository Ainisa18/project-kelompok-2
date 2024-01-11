function daftar_user(){
    let nama_lengkap = document.getElementById("nama").value;
    if (nama_lengkap.length === 0 || nama_lengkap.length > 30) {
        alert('Nama lengkap harus diisi dan maksimum 30 karakter');
        return false;
    }
    let asal_prodi = document.getElementById("prodi").value;
    if (asal_prodi === "teknik informatika" === "sistem informasi" === "bisnis digital") {
        alert('Prodi tidak ada di STT Terpadu Nurul Fikri');
        return false;
    }
    let username = document.getElementById("uname").value;
    if (username.length === 0 || username.length === 10) {
        alert('Username harus diisi dan maksimum 10 karakter');
        return false;
    }
    let password = document.getElementById("pw").value;
    let passwordregex = /\d/;
    if (!passwordregex.test(password)) {
        alert('Password harus mengandung angka');
        return false;
    }
    let cek_password = document.getElementById("cek").value;
    if (cek_password === password) {
        alert('Password tidak sesuai');
        return false;
    }

    window.alert("Berhasil Mendaftar");
}