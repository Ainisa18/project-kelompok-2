function data_parkir() {
    let area = document.getElementById("nama_area").value;
    if (area.length === 0 || area.length > 30) {
        alert('Nama area harus diisi dan maksimum 30 karakter');
        return false;
    }
    let kapasitas = document.getElementById("kapasitas").value;
    let kapasitasregex = /^\d{0,}$/;
    if (!kapasitasregex.test(kapasitas)) {
        alert('Kapasitas harus berupa angka');
        return false;
    }

    window.alert("Berhasil Submit");
    document.getElementById("form").action = "data-area-parkir.html";
}