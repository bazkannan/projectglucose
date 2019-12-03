const basic = (req, res) => {
    const { cancer, glucose, bloodPressure } = req.body;
    if (!cancer || !glucose || !bloodPressure) {
        res.status(400).send({ response: 'Form not complete' });
        console.log("Empty: " + req.body.cancer + req.body.glucose + req.body.bloodPressure);
    } else {
        if (glucose <= 12) {
            res.status(200).send({ response: '- Proceed with surgery \n - Check blood glucose hourly \n - Return to routine antidiabetics with first full meal' });
        } if (glucose > 12 && bloodPressure === "true") {
            res.status(200).send({ response: '- Cancel procedure \n - Consult Acute Medicine. ' });
        } if (glucose > 12 && bloodPressure === "false") {
            res.status(200).send({response: '- Proceed with surgery. ' +
                    '\n - Give subcut rapid acting insulin (1 unit for 3 mmol Glucose reduction). Max 6 units ' +
                    '\n - Check blood glucose hourly ' +
                    '\n If blood glucose > 12 mmol after 2 hours, repeat Subcutaneous Insulin as before. ' +
                    '\n - If blood glucose > 12 mmol 2 hours after second Insulin dose and patient not likely to be able to take meals, start Variable rate Intravenous Insulin Infusion (VRIII) as per guidelines. ' +
                    '\n - If blood glucose > 12 mmol 2 hours after second Insulin dose and patient likely to be able to take meals, start routine antidiabetic regimen'});
        } else {
            res.status(200).send({ response: 'check Urine / Capillary Ketones' });
        }
    }
}

module.exports = { basic };