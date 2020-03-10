export default {
  Query: {
    patient: async (_, { id }, { model }) => {
      const patient = await model.Patient.findById(id);

      console.log('Resolved', patient);

      return patient;
    },
    patients: async (_, args, { model }) => {
      const patients = await model.Patient.find({});

      return patients;
    }
  },
  Mutation: {
    addPatient: async (_, { input }, { model }) => {
      const data = {
        ...input
      };

      const patient = await model.Patient.findOne(data);

      if (patient) {
        throw new Error('Patient already created');
      }

      const newPatient = new model.Patient(data);

      try {
        const patient = await newPatient.save();

        console.log('Created', patient);

        return patient;
      } catch (error) {
        throw new Error(error);
      }
    },
    removePatient: async (_, { id }, { model }) => {
      try {
        const patientToDelete = await model.Patient.findOne({ _id: id });

        console.log('To Delete', patientToDelete);

        if (!patientToDelete) {
          throw new Error('Patient does not exist');
        }
        const patient = await model.Patient.findOneAndRemove({ _id: id });

        // await patient.save();

        console.log('Deleted', patient);

        return patient;
      } catch (error) {
        throw new Error(error);
      }
    },
    updatePatient: async (_, { id, input }, { model }) => {
      try {
        const patientToUpdate = await model.Patient.findOne({ _id: id });

        if (!patientToUpdate) {
          throw new Error('Patient does not exist');
        }

        const updateData = { ...patientToUpdate._doc, ...input };

        const patient = await model.Patient.findOneAndUpdate(
          { _id: id },
          { ...updateData },
          { new: true }
        );

        await patient.save();

        return patient;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
