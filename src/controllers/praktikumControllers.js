// controllers/praktikumControllers.js
exports.profil = (req, res) => {
    let name = req.params.name;
    let age = req.params.age;
    
    let response = {
        nama: name,
        umur: age
    };
    
    return res.json(response);
};

exports.bujurSangkar = (req, res) => {
    let panjang = Number(req.body.panjang);
    let lebar = Number(req.body.lebar);

    let luas = panjang * lebar;
    let keliling = 2 * (panjang + lebar);

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    };
    
    return res.json(response);
};

exports.convertCelsius = (req, res) => {
    let celsius = Number(req.params.celsius);

    let reamur = (celsius * 4) / 5;
    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    let response = {
        "celsius": celsius.toString(),
        "result": {
            "reamur": reamur,
            "fahrenheit": fahrenheit,
            "kelvin": kelvin
        }
    };

    return res.json(response);
};

exports.convertReamur = (req, res) => {
    let reamur = Number(req.params.reamur);

    let celsius = (reamur * 5) / 4;
    let fahrenheit = (reamur * 9 / 4) + 32;
    let kelvin = celsius + 273.15;

    let response = {
        "reamur": reamur.toString(),
        "result": {
            "celsius": celsius,
            "fahrenheit": fahrenheit,
            "kelvin": kelvin
        }
    };

    return res.json(response);
};

exports.convertKelvin = (req, res) => {
    let kelvin = Number(req.params.kelvin);

    let celsius = kelvin - 273.15;
    let fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
    let reamur = (kelvin - 273.15) * 4 / 5;

    let response = {
        "kelvin": kelvin.toString(),
        "result": {
            "celsius": celsius,
            "fahrenheit": fahrenheit,
            "reamur": reamur
        }
    };

    return res.json(response);
};

exports.convertFahrenheit = (req, res) => {
    let fahrenheit = Number(req.params.fahrenheit);

    let celsius = (fahrenheit - 32) * 5 / 9;
    let reamur = (fahrenheit - 32) * 4 / 9;
    let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;

    let response = {
        "fahrenheit": fahrenheit.toString(),
        "result": {
            "celsius": celsius,
            "reamur": reamur,
            "kelvin": kelvin
        }
    };

    return res.json(response);
};
