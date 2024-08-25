exports.decimal = (req, res) => {
    let decimal = Number(req.body.decimal);

    let biner = decimal.toString(2);
    let oktal = decimal.toString(8);
    let hexadecimal = decimal.toString(16).toUpperCase();

    let response = {
        "decimal": decimal,
        "result": {
            "biner": biner,
            "oktal": oktal,
            "hexadecimal": hexadecimal
        }
    };
    return res.json(response);
};

exports.oktal = (req, res) => {
    let oktal = req.body.oktal;

    let decimal = parseInt(oktal, 8);
    let biner = decimal.toString(2);
    let hexadecimal = decimal.toString(16).toUpperCase();

    let response = {
        "oktal": oktal,
        "result": {
            "decimal": decimal,
            "biner": biner,
            "hexadecimal": hexadecimal
        }
    };
    return res.json(response);
};

exports.biner = (req, res) => {
    let biner = req.body.biner;

    let decimal = parseInt(biner, 2);
    let oktal = decimal.toString(8);
    let hexadecimal = decimal.toString(16).toUpperCase();

    let response = {
        "biner": biner,
        "result": {
            "decimal": decimal,
            "oktal": oktal,
            "hexadecimal": hexadecimal
        }
    };
    return res.json(response);
};

exports.hexadecimal = (req, res) => {
    let hexadecimal = req.body.hexadecimal;

    let decimal = parseInt(hexadecimal, 16);
    let oktal = decimal.toString(8);
    let biner = decimal.toString(2);

    let response = {
        "hexadecimal": hexadecimal,
        "result": {
            "decimal": decimal,
            "oktal": oktal,
            "biner": biner
        }
    };
    return res.json(response);
};
