import mongoose, { Schema } from 'mongoose';

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    address: String,
    email: String,
    age: {
      type: Number,
      required: true
    },
    contact: {
      type: String
    },
    sex: String,
    emergency: [
      {
        contactName: String,
        contactPhone: String,
        relationship: String
      }
    ]
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

patientSchema.virtual('medications', {
  ref: 'Medication',
  foreignField: 'patient',
  localField: '_id'
});

patientSchema.pre(/^find/, function(next) {
  this.populate({ path: 'medications' }).populate('drugs');
  next();
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
