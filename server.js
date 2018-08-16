const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  'mongodb://admin:stemsago06@ds121382.mlab.com:21382/servergrab',
  { useNewUrlParser: true }
);

const restaurantRoutes = require('./routes/Restaurant.routes');
app.use('/api/restaurants', restaurantRoutes);

const port = process.env.PORT | 8000;

app.listen(port, function() {
  console.log('Port kamu di ' + port);
});
