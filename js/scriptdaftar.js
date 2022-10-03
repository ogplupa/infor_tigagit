const form = document.getElementById("form-daftar");
const btnSubmit = document.getElementById("btn-submit");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let namaResto = document.getElementById("username").value;
    swal({
        title: "Informasi",
        text: "Selamat " + namaResto + " sudah terdaftar!!",
        icon: "success",
        button: "Tutup",
    });

    form.reset();
});