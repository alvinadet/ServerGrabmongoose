const Restaurant = require('../models/Restaurant');
const Foods = require('../models/Foods');

module.exports = {
  index: (req, res) => {
    Restaurant.find({}, { __v: 0 }, (err, done) => {
      if (err) throw err;
      res.statusCode = 200;
      return res.json(done);
    });
  },
  detail: (req, res) => {
    Restaurant.findById(req.params.id, (err, done) => {
      if (err) throw err;
      res.statusCode = 200;
      return res.send(done);
    });
  },
  store: (req, res) => {
    Restaurant.create(req.body, (err, done) => {
      if (err) throw err;
      res.statusCode = 201;
      return res.json(done);
    });
  },
  update: (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, (err, done) => {
      if (err) throw err;
      res.statusCode = 201;
      return res.send('success update');
    });
  },
  delete: (req, res) => {
    Restaurant.findByIdAndRemove(req.params.id, (err, done) => {
      if (err) throw err;
      res.statusCode = 200;
      return res.send('success delete');
    });
  },
  getFoods: (req, res) => {
    Foods.find({ restaurant_id: req.params.id }, (err, done) => {
      if (err) throw err;
      res.send(done);
    });
  },
  storeFoods: (req, res) => {
    const foods = {
      ...req.body,
      restaurant_id: req.params.id
    };
    Foods.create(foods, (err, done) => {
      if (err) throw err;
      res.statusCode = 200;
      return res.send(done);
    });
  }
};
