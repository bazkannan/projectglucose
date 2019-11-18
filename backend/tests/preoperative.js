const basic = (req, res) => {
    const { fever, temp, cough } = req.body;
    if (!fever || !temp || !cough) {
        res.status(400).send({ response: 'Form not complete' });
        console.log("Empty: " + req.body.fever + req.body.temp + req.body.cough);
    } else {
        if (fever == "true" && temp > 38 && cough == "true") {
            res.status(200).send({ response: 'You have the flu' });
        } else if ( temp < 36 || temp > 37.2 ) {
            res.status(200).send({ response: 'Your temperature is abnormal' });
        } else {
            res.status(200).send({ response: 'You are healthy' });
        }
    }
}


module.exports = { basic };