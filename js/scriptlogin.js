const form = document.getElementById("form-login");
const btnLogin = document.getElementById("btn-login");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let nama = document.getElementById("username").value;
    swal({
        title: "Informasi",
        text: "Selamat " + nama + " Berhasil Login",
        icon: "success",
        button: "Tutup",
    });

    form.reset();
});