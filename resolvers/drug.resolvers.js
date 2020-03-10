export default {
  Query: {
    allDrugs: async (_, args, { model }) => {
      const drugs = await model.Drug.find({});

      return drugs;
    },
    drug: async (_, { id }, { model }) => {
      const drug = await model.Drug.findOne({ _id: id });

      if (!drug) {
        throw new Error('Drug does not exist');
      }

      return drug;
    }
  }
};
