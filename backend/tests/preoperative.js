const basic = (req, res) => {
    const { levels, temp, patient, surgery, anaesthesia, 
        metformin, shortInsulin, intermediateInsulin, alpha, 
        dppFour, glpReceptor, meglitinides, sgltTwo, sulphonyureas, thiasolidinediones } = req.body;
    if (!levels || !temp || !patient || !surgery || !anaesthesia || 
        !metformin || !shortInsulin || !intermediateInsulin || !alpha || !dppFour ||
        !glpReceptor || !meglitinides || !sgltTwo || !sulphonyureas || !thiasolidinediones ) {
        res.status(400).send({ response: 'Form not complete' });
        console.log("Empty: " + req.body.levels + req.body.temp + req.body.patient 
        + req.body.surgery + req.body.anaesthesia + req.body.metformin + req.body.shortInsulin
        + req.body.intermediateInsulin + req.body.alpha + req.body.dppFour + req.body.glpReceptor
        + req.body.meglitinides + req.body.sgltTwo + req.body.sulphonyureas + req.body.thiasolidinediones);
    } else {
        if (levels == "false") {
            res.status(200).send({ response: 'Please repeat HBA1C, input the result and run the app.' });
        } else if ( temp >= 70 ) {
            res.status(200).send({ response: 'HBA1C outside recommended guideline. Proceed if benefit outweighs risk' });
        } else if ( metformin == "true" || alpha == "true" || dppFour == "true" || glpReceptor == "true" || thiasolidinediones == "true") {
            res.status(200).send({ response: 'CONTINUE ' });
        } else if ( shortInsulin == "true" || meglitinides == "true" || sgltTwo == "true" || sulphonyureas == "true") {
            res.status(200).send({ response: 'OMIT' });
        } else if ( intermediateInsulin == "true") {
            res.status(200).send({ response: intermediateInsulin + 'HALF DOSE IN MORNING'})
        } else if ( anaesthesia == "false") {
            res.status(200).send({ response: '1). No fasting required \n 2). Take anti-diabetic medication as normal including Insulin \n 3). INR required if on Warfarin. No other tests needed.'})
        } else if ( anaesthesia == "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). Antidiabetic instruction as per their choice / red amber green \n 3). FBC, U&E and other tests as indicated.'});
        } else {
            res.status(200).send({ response: 'Continue' });
        }
    }
}

module.exports = { basic };