const basic = (req, res) => {
    const { cancer, glucose, bloodPressure } = req.body;
    if (!cancer || !glucose || !bloodPressure) {
        res.status(400).send({ response: 'Form not complete' });
        console.log("Empty: " + req.body.cancer + req.body.glucose + req.body.bloodPressure);
    } else {
        if (cancer == "true" && glucose > 38 && bloodPressure == "true") {
            res.status(200).send({ response: 'You have the flu' });
        } else if (glucose < 36 || glucose > 37.2) {
            res.status(200).send({ response: 'Your temperature is abnormal' });
        } else {
            res.status(200).send({ response: 'You are healthy' });
        }
    }
}

module.exports = { basic };