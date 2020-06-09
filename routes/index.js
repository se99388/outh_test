const express = require('express');
const router = express.Router();
const { authorizationUri, client } = require('../auth/oath_2');
const { getNetSuiteRestlet, postNetSuiteRestlet } = require('../api_netsuite/api_netsuite');
const apiNetsuite = require('./api/netsuite');
router.use('/apiNetsuite', apiNetsuite);

router.get("/", async (req, res) => {
    try {
        // console.log("authorizationUri:", authorizationUri);
        console.log("access: ", access)
        res.redirect(authorizationUri);
    } catch (ex) {
        res.json(ex);
    }

})

router.post("/", async (req, res) => {
    try {
        res.json({ data: 'this is post' });
    } catch (ex) {
        console.log("err", ex)
        res.json(ex);
    }

})

router.put("/", async (req, res) => {
    try {
        res.json({ data: 'this is put' });
    } catch (ex) {
        res.json(ex);
    }

})

router.delete("/", async (req, res) => {
    try {
        res.json({ data: 'this is delete' });
    } catch (ex) {
        res.json(ex);
    }

})


// Callback service parsing the authorization token and asking for the access token
router.get('/callback', async (req, res) => {
    const { code } = req.query;
    // console.log("code: ", req.query)

    const tokenParams = {
        code: code,
        redirect_uri: 'https://localhost:3000/callback',
        scope: 'restlets rest_webservices',
    };

    try {
        const accessToken = await client.getToken(tokenParams);
        access = accessToken;
        
        console.log('The resulting token: ', access);
        //get request
        // const responseData = await getNetSuiteRestlet(accessToken.token);
        //post request
        // const responseData = await postNetSuiteRestlet(accessToken.token);

        // console.log("responseData: ", responseData);
        // return res.status(200).json(responseData);
        return res.status(200).json({ accessToken: "accessToken" });
    } catch (error) {
        console.log('Access Token Error', error.message);
        return res.status(500).json('Authentication failed');
    }
});

module.exports = {
    router,
    access2:"123"  
};
