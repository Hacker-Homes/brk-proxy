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
  axios.get(`http://34.222.43.31/api/listing/${id}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// app.get('/room', (req, res, next) => {
//   axios.get('http://35.155.225.182/room?id' + req.url)
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((e) => res.sendStatus(500));
// });

// app.get('/reviews/:room_id', (req, res) => {
//   const { room_id } = req.params;
//   res.redirect(`http://44.233.243.134/api/reviews/${room_id}`);
// });


app.listen(3010, function () {
  console.log('listening on port 3010!');
});
