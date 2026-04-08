function tampilData() {
    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;

    // Ambil umur (checkbox)
    let umur = [];
    let umurList = document.getElementsByName("umur");
    for (let i = 0; i < umurList.length; i++) {
        if (umurList[i].checked) {
            umur.push(umurList[i].value);
        }
    }

    // Jenis kelamin (radio)
    let jk = document.querySelector('input[name="j.k"]:checked');
    jk = jk ? jk.value : "";

    // Tingkatan (radio)
    let tingkat = document.querySelector('input[name="tingkat"]:checked');
    tingkat = tingkat ? tingkat.value : "";

    // Tampilkan hasil
    document.getElementById("output").innerHTML = `
        <h3>Hasil Data:</h3>
        Nama: ${nama} <br>
        Kelas: ${kelas} <br>
        Umur: ${umur.join(", ")} <br>
        Jenis Kelamin: ${jk} <br>
        Tingkatan: ${tingkat}
    `;
}

function resetForm() {
    document.getElementById("nama").value = "";
    document.getElementById("kelas").value = "";

    let checkbox = document.getElementsByName("umur");
    checkbox.forEach(c => c.checked = false);

    let radio = document.querySelectorAll('input[type="radio"]');
    radio.forEach(r => r.checked = false);

    document.getElementById("output").innerHTML = "";
}