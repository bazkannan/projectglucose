const basic = (req, res) => {
    const { cancer, glucose, bloodPressure } = req.body;
    if (!cancer || !glucose || !bloodPressure) {
        res.status(400).send({ response: 'Form not complete' });
        console.log("Empty: " + req.body.cancer + req.body.glucose + req.body.bloodPressure);
    } else {
        if (cancer == "true" && glucose > 38 && bloodPressure == "true") {
            res.status(200).send({ response: 'You have the flu' });
        } else if (glucose < 12) {
            res.status(200).send({ response: '- Proceed with surgery \n - Check blood glucose hourly \n - Return to routine antidiabetics with first full meal' });
        } else if (glucose > 12) {
            res.status(200).send({ response: 'check Urine / Capillary Ketones' });
        } else {
            res.status(200).send({ response: 'You are healthy' });
        }
    }
}

module.exports = { basic };