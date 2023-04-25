// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.get("/api/:date?", (req, res) => {
  let dateObj;
  if (req.params.date) {
    if (typeof req.params.date === 'string' || typeof req.params.date === 'number') {
      if (typeof req.params.date === 'string') {
        dateObj = new Date(req.params.date);
      }
      if (typeof req.params.date === 'number') {
        if (req.params.date.length === 13) {
          dateObj = new Date(req.params.date * 1000);
        } else if (req.params.date.length === 10) {
          dateObj = new Date(req.params.date);
        }
      }
      if (dateObj instanceof Date && !isNaN(x)) {
        res.json({ unix: Math.floor(Date.parse(dateObj.toString()) / 1000), utc: dateObj.toString() })
      } else {
        res.json({ error: "Invalid Date" })
      }
    }
    if (req.params.date instanceof Date && !isNaN(x)) {
      res.json({ unix: Math.floor(Date.parse(req.params.date.toString()) / 1000), utc: req.params.date.toString() })
    } else {
      res.json({ error: "Invalid Date" })
    }
  } else {
    let unixNow = Math.floor(Date.now() / 1000);
    let now = new Date().toString();
    res.json({ unix: unixNow, utc: now });
  }
})

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
