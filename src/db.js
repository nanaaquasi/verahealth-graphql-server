const mongoose = require('mongoose');

const url =
  'mongodb+srv://verahealth:password1234@cluster0-xvsvo.mongodb.net/verahealth?retryWrites=true&w=majority';

const localDB = 'mongodb://127.0.0.1:27017/mediHealth';

mongoose
  .connect(process.env.MONGO_URL || localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
