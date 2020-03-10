export default {
  Query: {
    getMedications: async (_, args, { model }) => {
      try {
        return await model.Medication.find({});
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  Mutation: {
    addMedication: async (_, { input }, { model }) => {
      try {
        const medication = await model.Medication.create(input);

        return medication;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
