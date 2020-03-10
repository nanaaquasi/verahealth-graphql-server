export default {
  Query: {
    allDrugs: async (_, args, { model }) => {
      try {
        const drugs = await model.Drug.find({});

        return drugs;
      } catch (error) {
        console.log(error);
      }
    },
    drug: async (_, { id }, { model }) => {
      try {
        const drug = await model.Drug.findOne({ _id: id });

        if (!drug) {
          throw new Error('Drug does not exist');
        }

        return drug;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
