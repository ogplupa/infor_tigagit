const btn1 = document.getElementById("klik1");
btn1.addEventListener('click', function () {
    swal({
            title: "Apakah Kamu?",
            text: "Akan Membeli Barang Ini",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Barang Berhasil Ditambahkan Kekeranjang", {
                    icon: "success",
                });
            } else {
                swal("Kamu Telah Membatalkan Pesanan", {
                    icon: "error",
                });

            }
        });
})

const btn2 = document.getElementById("klik2");
btn2.addEventListener('click', function () {
    swal({
            title: "Apakah Kamu?",
            text: "Akan Membeli Barang Ini",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Barang Berhasil Ditambahkan Kekeranjang", {
                    icon: "success",
                });
            } else {
                swal("Kamu Telah Membatalkan Pesanan", {
                    icon: "error",
                });

            }
        });
})

const btn3 = document.getElementById("klik3");
btn3.addEventListener('click', function () {
    swal({
            title: "Apakah Kamu?",
            text: "Akan Membeli Barang Ini",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Barang Berhasil Ditambahkan Kekeranjang", {
                    icon: "success",
                });
            } else {
                swal("Kamu Telah Membatalkan Pesanan", {
                    icon: "error",
                });

            }
        });
})