import mongoose, { Schema } from 'mongoose';

const medicationSchema = new Schema(
  {
    type: [
      {
        type: String
      }
    ],
    drugs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Drug'
      }
    ],
    patient: {
      type: Schema.Types.ObjectId,
      ref: 'Patient'
    },
    hasTakenDrug: Boolean,
    dosage: [
      {
        duration: {
          type: String
        },
        startDate: Date,
        dosageUnit: [String],
        dosageTimes: [Date]
      }
    ]
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

medicationSchema.pre(/^find/, function(next) {
  this.populate('drugs');
  next();
});

const Medication = mongoose.model('Medication', medicationSchema);

export default Medication;
