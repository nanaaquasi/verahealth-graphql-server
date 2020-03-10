export default {
  Query: {
    getMedications: async (_, args, { model }) => {
      return await model.Medication.find({});
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
