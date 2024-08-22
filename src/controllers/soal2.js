exports.selsius = (req, res) => {
    let selsius = Number(req.params.selsius);

    let reamur = (selsius * 4) / 5;
    let fahrenheit = (selsius * 9 / 5) + 32;
    let kelvin = selsius + 273.15;

    let response = {
        "selsius": selsius.toString(),
        "result": {
            "reamur": reamur,
            "fahrenheit": fahrenheit,
            "kelvin": kelvin
        }
    };

    return res.json(response);
}

exports.reamur = (req, res) => {
    let reamur = Number(req.params.reamur);

    let selsius = (reamur * 5) / 4;
    let fahrenheit = (reamur * 9 / 4) + 32;
    let kelvin = selsius + 273.15;

    let response = {
        "reamur": reamur.toString(),
        "result": {
            "selsius": selsius,
            "fahrenheit": fahrenheit,
            "kelvin": kelvin
        }
    };

    return res.json(response);
}

exports.fahrenheit = (req, res) => {
    let fahrenheit = Number(req.params.fahrenheit);

    let selsius = (fahrenheit - 32) * 5 / 9;
    let reamur = (fahrenheit - 32) * 4 / 9;
    let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;

    let response = {
        "fahrenheit": fahrenheit.toString(),
        "result": {
            "selsius": selsius,
            "reamur": reamur,
            "kelvin": kelvin
        }
    };

    return res.json(response);
}

exports.kelvin = (req, res) => {
    let kelvin = Number(req.params.kelvin);

    let selsius = kelvin - 273.15;
    let fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
    let reamur = (kelvin - 273.15) * 4 / 5;

    let response = {
        "kelvin": kelvin.toString(),
        "result": {
            "selsius": selsius,
            "fahrenheit": fahrenheit,
            "reamur": reamur
        }
    };

    return res.json(response);
}