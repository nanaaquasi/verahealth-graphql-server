import { fileLoader, mergeTypes} from 'merge-graphql-schemas'
import * as path from 'path'

const typeArray = fileLoader(path.join(__dirname, './'));
const typesMerged = mergeTypes(typeArray);

export default typesMerged