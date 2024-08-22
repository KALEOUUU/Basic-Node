exports.kubus = (req, res) => {
    let sisi = Number(req.body.sisi);

    let volume = Math.pow(sisi, 3);
    let luasPermukaan = 6 * Math.pow(sisi, 2);

    res.json({
        sisi: sisi,
        volume: volume,
        luasPermukaan: luasPermukaan
    });
};

exports.balok = (req, res) => {
    let panjang = Number(req.body.panjang);
    let lebar = Number(req.body.lebar);
    let tinggi = Number(req.body.tinggi);

    let volume = panjang * lebar * tinggi;
    let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

    res.json({
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luasPermukaan: luasPermukaan
    });
};

exports.tabung = (req, res) => {
    let jariJari = Number(req.body.jariJari);
    let tinggi = Number(req.body.tinggi);

    let volume = Math.PI * Math.pow(jariJari, 2) * tinggi;
    let luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi);

    res.json({
        jariJari: jariJari,
        tinggi: tinggi,
        volume: volume,
        luasPermukaan: luasPermukaan
    });
};

exports.kerucut = (req, res) => {
    let jariJari = Number(req.body.jariJari);
    let tinggi = Number(req.body.tinggi);
    let s = Math.sqrt(Math.pow(jariJari, 2) + Math.pow(tinggi, 2)); // garis pelukis

    let volume = (1/3) * Math.PI * Math.pow(jariJari, 2) * tinggi;
    let luasPermukaan = Math.PI * jariJari * (jariJari + s);

    res.json({
        jariJari: jariJari,
        tinggi: tinggi,
        volume: volume,
        luasPermukaan: luasPermukaan
    });
};
