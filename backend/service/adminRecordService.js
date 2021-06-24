import Record from '../model/Record.js';

class AdminRecordService {
  findAll = async (limit, sortBy) => {
    const validSortByValues = ['releaseDate', 'name'];
    //TODO what is the best way to validate the body and query on express? make a search on it
    // if (validSortByValues.includes(sortBy)) {

    // }
    //TODO see how to sort the results with mongoose
    //TODO pagination with mongoose
    return Record.find();
  };
}

const adminRecordService = new AdminRecordService();
export default adminRecordService;
