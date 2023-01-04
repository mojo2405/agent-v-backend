const {google} = require('googleapis');
const express = require('express')
var cors = require('cors')
const app = express()
const port = 8080
app.use(cors())

app.get('/', (req, res) => {
    const auth = new google.auth.JWT({
        email: "eitan-excel@agents-victor.iam.gserviceaccount.com",
        key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCjrl4ABhi14FWp\nRXTjaF6fKr1RHtWTviA+dA96rA+Cx2SVB1cGdcNcbASv8hLUIn3S6w6EP2DURi9B\nMYU4gTZZ/VYT78i1DfEfE3oeo8aQpzHJ0i2kDrNBbeGRoTi0UapJnDZMW29HAFLf\nsg8biIUEHcViNvRml2ODBXHNEn/o/F+E9LGM5tgxAFYNealth7Mc+kjSaIDe155r\nqDnY2lsICu1y77thsZIinMDZQvILCjZisqVJDJii7V77BJnUUFMDdF8D051vt72b\n0qGCNG7xS5EgIQf4BxYhsdcU1oz0hxJJKyduyOkAYJ3KgKYwi1MlO3mt6+9Txnmh\nTlrZmyZPAgMBAAECggEABB9HkcOVirsQHTe5FmMSAvsuEmVu5o4ivL/qheHgcCA6\nacBqEikUFvdHdPDpRXtq5M1zq6P2+dGcrg0juEUUy9Zj/ROMX/bubCRu7mecgBcd\n22HWMWwHWq38QNEpHu1xlvH+shSZbFXXQHf5Bm39P5nKV0tgA1drs6iG8a22F/V8\nzFYJcDSfOqnl/GJcfcwpEThPZCu2gsqIoXYBHvU7HOK+21EsVGQ7hnLahgeqBz32\nEb4/6PsdcFSJV7GYzoeDksjhBC9qD1fSI+daP5+wq3bT46kib0E6T3iozfdY7TUY\nvNTNPGE6MJSOUAmilmbRmb6Lw/gseGIkpHLvzdZAkQKBgQDhnJkqej8hDuSnz47N\nKzTVghiokzoStltoN6AENqzXb9wgLOK0LTz0SALn/74hSemtyuHv1hNrQ0inzeuY\nOCuzCME617TKVAxYC1FHSoZ0v7bXLpbG5+k1DLQGGNAlWeXdncflav5+J9rU/o8t\nYlLKV2JPES8EyEkfQKHWNC1I/wKBgQC5ulErrcATr7LiZATv7sa/68mRSD0jFkDl\neOClKNTcX6tQLBD15pVbSTWTiTkdi7H5Ks4MWXRrlDpJe0edeGtWLkeHlZosGSD3\n8sPeXsaEDsKo9hyodRCHtf6gatLZXVwdfhdS5J7SfEZc/Aij/xficdk+E1Mk7tEH\nJlejARZSsQKBgGGxB3mnOZK8+jHX5EPfA5+4F6lXJvxXTjlQbM+mRS18WFruVLQk\nKpK0Y93FlbSgZrlEcpUBo6L8nYdb2TouiG2byuAJ61T5E+dD70vpb1M6eJewqsUy\nQn8gIwvIzsh9ptVRru8eZ1iFNXKpT6IdQzAuqnkGPc/aUh9gQzOXoExNAoGBAJ9K\nPPPJQUOhHTstrU5a6/sOrwH7gvPk0iP9WC5OpsGbC8LnCGTeLprsXxb6ShIdDbc2\nDyJoVoEt0A/Vu8ZC0UxIxPB0TpYjtzLw8yx0/K2mOy3OZyXTwSmj3Y6YD959Q9PH\noRlnGxBLpc16G68LyeBc5IVo7ZZvfLc1G1SiShMBAoGARUpUUMRspRkw9fwvtIeJ\ntUY4j/28DugqdOMuX4E8p+civJM+pgNblQn+muCRMRLmc0IxxU5wBf6WvtUIpj2u\nJ1WmpwITLzlAfDMDRHapkDi7xOi7yx2Qwhsg/oBfUa2+JeUqkBJz2fk+fkSolS6I\nR18xJqBUsqZXVwmZbUhGk70=\n-----END PRIVATE KEY-----\n",
        scopes: ["https://www.googleapis.com/auth/spreadsheets"]
      })
      const sheet = google.sheets("v4");
       sheet.spreadsheets.values.get({
        spreadsheetId: '1lsQjbekwROHAMG16f2yIEBpbOfr5uOltsaQ_n92i5mw',
        auth: auth,
        range: "Sheet1",
      },
      (err, res2) => {
        if (err) {
            console.error('The API returned an error.');
            throw err;
          }
        res.send(res2.data.values);
    });
    
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

