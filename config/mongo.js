const mongoose = require('mongoose');

const dbConnection = () => {
  const DB_URI = process.env.DB_URI;
  const options = {
    useNewUrlParser: true,
  };
  const callback = (err, res) => {
    if (!err) console.log('**** Connected to mongo successfully ****');
    else console.log('**** Connection error ****');
  };
  mongoose.connect(DB_URI, options, callback);
};

module.exports = dbConnection;
