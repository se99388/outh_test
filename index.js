
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const https = require('https');
const routes = require('./routes').router;
const {access2} = require('./routes');

console.log(module.filename, access2);

const httpsOptions = {
    cert: fs.readFileSync('ssl/cert.pem'),
    key: fs.readFileSync('ssl/key.pem')
}

app.use(routes);
 
var httpsServer = https.createServer(httpsOptions, app);


httpsServer.listen(port,() => console.log(`Listening to https://localhost:${port}`));


// app.listen(port, () => console.log(`Listening to http://localhost:${port}`));