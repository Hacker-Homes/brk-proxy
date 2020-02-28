require('newrelic');

const express = require('express');
const path = require('path');
const axios = require('axios');
var cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../public'));

app.get('/api/listing/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  axios.get(`http://34.215.142.111/api/listing/${id}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/booking/:id', (req, res) => {
  const { id } = req.params;
  res.redirect(`http://localhost:3003/booking/${id}`);
});

app.get('/reviews/:room_id', (req, res) => {
  const { room_id } = req.params;
  res.redirect(`http://localhost:3004/reviews/${room_id}`);
});


app.listen(3010, function () {
  console.log('listening on port 3010!');
});
