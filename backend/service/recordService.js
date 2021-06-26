import Record from '../model/Record.js';

class RecordService {
  findAll = async (limit, sortBy) => {
    const validSortByValues = ['releaseDate', 'name'];
    //TODO what is the best way to validate the body and query on express? make a search on it
    // if (validSortByValues.includes(sortBy)) {

    // }
    //TODO see how to sort the results with mongoose
    //TODO pagination with mongoose
    return Record.find();
  };

  findById = async (id) => {
    return Record.findById(id);
  };
}

const recordService = new RecordService();
export default recordService;
