const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/mediHealth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB connected'));
