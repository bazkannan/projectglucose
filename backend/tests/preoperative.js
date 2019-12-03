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
        if (levels === "false") {
            res.status(200).send({ response: 'Please repeat HBA1C, input the value and run the app.' });
        } else if (levels === "true" && temp > 90 ) {
            res.status(200).send({ response: 'Please go back and check your values then repeat the test.'});
        } else if ( levels === "true" && temp >= 70 ) {
            res.status(200).send({ response: 'HBA1C outside recommended guideline for surgery. Proceed if benefit outweighs risks (e.g. urgent / cancer surgery)' });
        } else if ( anaesthesia === "false") {
            res.status(200).send({ response: '1) No fasting required \n2) Take anti-diabetic medication as normal including insulin \n3) INR required if on Warfarin. No other tests needed.'});
        } else if ( anaesthesia === "true" && metformin === "true" && shortInsulin === "true" && intermediateInsulin === "true" && alpha === "true" && dppFour === "true" && glpReceptor === "true" && meglitinides === "true" && sgltTwo === "true" && sulphonyureas === "true" && thiasolidinediones === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nShort acting Insulin (Humulin S, apidra, Novorapid) - OMIT \nIntermediate or Long acting Insulin - HALF DOSE IN MORNING \nAlpha Glucosidase Inhibitors (Acarbose) - CONTINUE \nDPP 4 Inhibitors (Gliptins) - CONTINUE \nGLP receptor antagonists (Glutides and Exenatides) - CONTINUE \nMeglitinides (Glinides) - OMIT \nSGLT 2 inhibitors (Flozins) - OMIT \nSulphonyureas - OMIT \nGlitazones - CONTINUE'});
        } else if ( anaesthesia === "true" && metformin === "true" && shortInsulin === "true" && intermediateInsulin === "true" && alpha === "true" && dppFour === "true" && glpReceptor === "true" && meglitinides === "true" && sgltTwo === "true" && sulphonyureas === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nShort acting Insulin (Humulin S, apidra, Novorapid) - OMIT \nIntermediate or Long acting Insulin - HALF DOSE IN MORNING \nAlpha Glucosidase Inhibitors (Acarbose) - CONTINUE \nDPP 4 Inhibitors (Gliptins) - CONTINUE \nGLP receptor antagonists (Glutides and Exenatides) - CONTINUE \nMeglitinides (Glinides) - OMIT \nSGLT 2 inhibitors (Flozins) - OMIT \nSulphonyureas - OMIT'});
        } else if ( anaesthesia === "true" && metformin === "true" && shortInsulin === "true" && intermediateInsulin === "true" && alpha === "true" && dppFour === "true" && glpReceptor === "true" && meglitinides === "true" && sgltTwo === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nShort acting Insulin (Humulin S, apidra, Novorapid) - OMIT \nIntermediate or Long acting Insulin - HALF DOSE IN MORNING \nAlpha Glucosidase Inhibitors (Acarbose) - CONTINUE \nDPP 4 Inhibitors (Gliptins) - CONTINUE \nGLP receptor antagonists (Glutides and Exenatides) - CONTINUE \nMeglitinides (Glinides) - OMIT \nSGLT 2 inhibitors (Flozins) - OMIT'});
        } else if ( anaesthesia === "true" && metformin === "true" && shortInsulin === "true" && intermediateInsulin === "true" && alpha === "true" && dppFour === "true" && glpReceptor === "true" && meglitinides === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nShort acting Insulin (Humulin S, apidra, Novorapid) - OMIT \nIntermediate or Long acting Insulin - HALF DOSE IN MORNING \nAlpha Glucosidase Inhibitors (Acarbose) - CONTINUE \nDPP 4 Inhibitors (Gliptins) - CONTINUE \nGLP receptor antagonists (Glutides and Exenatides) - CONTINUE \nMeglitinides (Glinides) - OMIT'});
        } else if ( anaesthesia === "true" && metformin === "true" && shortInsulin === "true" && intermediateInsulin === "true" && alpha === "true" && dppFour === "true" && glpReceptor === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nShort acting Insulin (Humulin S, apidra, Novorapid) - OMIT \nIntermediate or Long acting Insulin - HALF DOSE IN MORNING \nAlpha Glucosidase Inhibitors (Acarbose) - CONTINUE \nDPP 4 Inhibitors (Gliptins) - CONTINUE \nGLP receptor antagonists (Glutides and Exenatides) - CONTINUE'});
        } else if ( anaesthesia === "true" && metformin === "true" && shortInsulin === "true" && intermediateInsulin === "true" && alpha === "true" && dppFour === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nShort acting Insulin (Humulin S, apidra, Novorapid) - OMIT \nIntermediate or Long acting Insulin - HALF DOSE IN MORNING \nAlpha Glucosidase Inhibitors (Acarbose) - CONTINUE \nDPP 4 Inhibitors (Gliptins) - CONTINUE'});
        } else if ( anaesthesia === "true" && metformin === "true" && shortInsulin === "true" && intermediateInsulin === "true" && alpha === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nShort acting Insulin (Humulin S, apidra, Novorapid) - OMIT \nIntermediate or Long acting Insulin - HALF DOSE IN MORNING \nAlpha Glucosidase Inhibitors (Acarbose) - CONTINUE'});
        } else if ( anaesthesia === "true" && metformin === "true" && shortInsulin === "true" && intermediateInsulin === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nShort acting Insulin (Humulin S, apidra, Novorapid) - OMIT \nIntermediate or Long acting Insulin - HALF DOSE IN MORNING'});
        } else if ( anaesthesia === "true" && metformin === "true" && shortInsulin === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nShort acting Insulin (Humulin S, apidra, Novorapid) - OMIT'});
        } else if ( anaesthesia === "true" && metformin === "true" && intermediateInsulin === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nIntermediate or Long acting Insulin - HALF DOSE IN MORNING'});
        } else if ( anaesthesia === "true" && metformin === "true" && alpha === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nAlpha Glucosidase Inhibitors (Acarbose) - CONTINUE'});
        } else if ( anaesthesia === "true" && metformin === "true" && dppFour === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nDPP 4 Inhibitors (Gliptins) - CONTINUE'});
        } else if ( anaesthesia === "true" && metformin === "true" && glpReceptor === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nGLP receptor antagonists (Glutides and Exenatides) - CONTINUE'});
        } else if ( anaesthesia === "true" && metformin === "true" && meglitinides === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nMeglitinides (Glinides) - OMIT'});
        } else if ( anaesthesia === "true" && metformin === "true" && sgltTwo === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nSGLT 2 inhibitors (Flozins) - OMIT'});
        } else if ( anaesthesia === "true" && metformin === "true" && sulphonyureas === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nSulphonyureas - OMIT'});
        } else if ( anaesthesia === "true" && metformin === "true" && thiasolidinediones === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMetformin - CONTINUE \nGlitazones - CONTINUE'});
        } else if ( anaesthesia === "true" && metformin === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications. \nMetformin - CONTINUE ' });
        } else if ( anaesthesia === "true" && shortInsulin === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications. \nShort acting Insulin (Humulin S, apidra, Novorapid) - OMIT' });
        } else if ( anaesthesia === "true" && intermediateInsulin === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nIntermediate or Long acting Insulin - HALF DOSE IN MORNING'});
        } else if ( anaesthesia === "true" && alpha === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nAlpha Glucosidase Inhibitors (Acarbose) - CONTINUE'});
        } else if ( anaesthesia === "true" && dppFour === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nDPP 4 Inhibitors (Gliptins) - CONTINUE'});
        } else if ( anaesthesia === "true" && glpReceptor === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nGLP receptor antagonists (Glutides and Exenatides) - CONTINUE'});
        } else if ( anaesthesia === "true" && meglitinides === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nMeglitinides (Glinides) - OMIT'});
        } else if ( anaesthesia === "true" && sgltTwo === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nSGLT 2 inhibitors (Flozins) - OMIT'});
        } else if ( anaesthesia === "true" && sulphonyureas === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nSulphonyureas - OMIT'});
        } else if ( anaesthesia === "true" && thiasolidinediones === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications, \nGlitazones - CONTINUE'});
        } else if ( anaesthesia === "true") {
            res.status(200).send({ response: '1). Fasting as per 1 - 2 - 6 rule \n 2). FBC, U& E and other tests as indicated. \n 3). Instructions for antidiabetic medications'});
        } else {
            res.status(200).send({ response: 'Please repeat HBA1C, input the value and run the app' });
        }
    }
}

module.exports = { basic };