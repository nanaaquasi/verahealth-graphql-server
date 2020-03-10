const mongoose = require('mongoose');

const url =
  'mongodb+srv://verahealth:password1234@cluster0-xvsvo.mongodb.net/verahealth?retryWrites=true&w=majority';

mongoose
  .connect(process.env.MONGO_URL || url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
