exports.bmi = (req, res) => {
    let tb = Number(req.body.tb);
    let bb = Number(req.body.bb);

    let hasil = bb / (tb**2);
    let kategori;
    if (hasil < 18.5) {
        kategori = "Kekurangan berat badan"
    } else if (hasil >= 18.5 && hasil < 24.9) {
        kategori = "Normal"
    } else if (hasil >= 25.0 && hasil < 29.9) {
        kategori = "Kelebihan berat badan"
    } else {
        kategori = "Obesitas"
    };

    hasil = hasil.toFixed(2)

    let response = {
        "tb": tb,
        "bb": bb,
        "bmi": hasil,
        "status": kategori
    };

    return res.json(response);

}
