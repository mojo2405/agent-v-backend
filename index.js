
const {google} = require('googleapis');
const express = require('express')
require('dotenv').config();
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

app.get('/healthcheck', (req, res) => {
      res.send('ok');  
})

app.get('/', (req, res) => {
    const datatype = req.query.datatype;
    const auth = new google.auth.JWT({
        email: process.env.GOOGLE_EMAIL,
        key: process.env.GOOGLE_KEY,
        scopes: [process.env.GOOGLE_SCOPES]
      })
      const sheet = google.sheets("v4");
       sheet.spreadsheets.values.get({
        spreadsheetId: '1lsQjbekwROHAMG16f2yIEBpbOfr5uOltsaQ_n92i5mw',
        auth: auth,
        range: datatype+'!A1:L200',
      },
      (err, res2) => {
        if (err) {
            console.error('The API returned an error.');
            // throw err;
            res.send();
          }
        res.send(res2.data.values);
    });
    
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

