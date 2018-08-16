const Foods = require('../models/Foods');
module.exports = {
  getAll: (req, res) => {
    Foods.find({}, (err, done) => {
      if (err) throw err;
      res.statusCode = 200;
      return res.send(done);
    });
  },
  update: (req, res) => {
    Foods.findByIdAndUpdate(req.params.id, req.body, (err, done) => {
      if (err) throw err;
      res.statusCode = 200;
      return res.send('berhasil diedit');
    });
  },
  delete: (req, res) => {
    Foods.findByIdAndRemove(req.params.id, (err, done) => {
      if (err) throw err;
      res.statusCode = 200;
      return res.send('Berhasil dihapus');
    });
  }
};
