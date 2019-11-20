const basic = (req, res) => {
    const { patient, temp, levels } = req.body;
    if (!patient || !temp || !levels) {
        res.status(400).send({ response: 'Form not complete' });
        console.log("Empty: " + req.body.patient + req.body.temp + req.body.levels);
    } else {
        if (patient == "true" && temp > 38 && levels == "true") {
            res.status(200).send({ response: 'You have the flu' });
        } else if ( temp < 36 || temp > 37.2 ) {
            res.status(200).send({ response: 'Your temperature is abnormal' });
        } else {
            res.status(200).send({ response: 'You are healthy' });
        }
    }
}

module.exports = { basic };