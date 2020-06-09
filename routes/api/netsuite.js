const express = require('express');
const {getNetSuiteRestlet} = require('../../api_netsuite/api_netsuite');
const {access2} = require('../index.js');

console.log(module.filename, access2);

const router = express.Router();


router.get('/get', async (req,res)=>{
    console.log('The /get token: ', access);
    const responseData = await getNetSuiteRestlet(access.token.access_token);
    res.status(200).json({ responseData });  
});

module.exports = router;