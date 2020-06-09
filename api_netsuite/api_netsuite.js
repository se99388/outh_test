//Sending a request to netSuite with token 
const axios = require('axios');

//restlet
// const URL  = 'https://tstdrv647978.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=521&deploy=1&recordType=CUSTOMER&id=373'; 

//suitetalk
const URL  = 'https://tstdrv647978.suitetalk.api.netsuite.com/services/rest/record/v1/customer/373'; 
const URL_POST  = 'https://tstdrv647978.suitetalk.api.netsuite.com/services/rest/record/v1/customer'; 


async function getNetSuiteRestlet(token){
    // console.log("token.access_token: ", token);
    try{
        
        const response = await axios({
            method:'get',
            url:URL,
            headers:{
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
            })
            // console.log("response",response)
            return response.data;
    }catch(ex){
        console.log("ex: ",ex)
    }

}

async function postNetSuiteRestlet(token){
    console.log("token.access_token: ", token);
    try{
        
        const response = await axios({
            method:'post',
            url:URL_POST,
            headers:{
                "Authorization": `Bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            },
            data:{
                "companyname": "123_OfirBySuiteTalk",	
                    "firstName": "1_Ofir",
                  "lastName": "1_Houbara"
                }
            })
            console.log("response",response)
            return response.data;
    }catch(ex){
        console.log("ex: ",ex)
    }

}

module.exports={
    getNetSuiteRestlet,
    postNetSuiteRestlet
}