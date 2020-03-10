import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
const path = require('path');

const typeArray = fileLoader(path.join(__dirname, './'));
const typesMerged = mergeTypes(typeArray);

export default typesMerged;
