const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({
  NDC_Code: String,
  name: String,
  overview: String,
  drugInfo: {
    importantInfo: String,
    caution: [String],
    furtherInfo: String,
    interactionsInfo: [String],
    avoidance: String,
    sideEffects: {
      info: String,
      effects: [String]
    }
  },
  imageUrl: [String],
  url: String,
  dosage: {
    info: String,
    overdoseInfo: String,
    howTo: [String],
    dosageMiss: String
  }
});

const Drug = new mongoose.model('Drug', drugSchema);

module.exports = Drug;
