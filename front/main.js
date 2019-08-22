const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware')
const https = require('https');


const fs = require('fs');

const app = express();

app.all('*', require('express-force-domain')('https://www.everytrend.kr') );


app.use(express.static(path.join(__dirname, 'build')));

app.use(proxy('/api', { 
  target: 'https://www.everytrend.kr:8000/',
  changeOrigin: true,
  secure: false,
  prependPath: false
}))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const options = {
	key: fs.readFileSync('/var/www/petition_trend/sslforfree/private.key'),
	cert: fs.readFileSync('/var/www/petition_trend/sslforfree/certificate.crt')
};



https.createServer(options, app).listen(443, function() {
  console.log("HTTPS server listening on port " + 443);
});
