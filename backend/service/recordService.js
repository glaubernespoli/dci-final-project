import Record from '../model/Record.js';

class RecordService {
  itemsPerPage = process.env.ITEMS_PER_PAGE || 30;

  //https://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js

  findAll = async (sortBy) => {
    const validSortByValues = ['releaseDate', 'name'];
    //TODO what is the best way to validate the body and query on express? make a search on it
    // if (validSortByValues.includes(sortBy)) {

    // }
    //TODO see how to sort the results with mongoose
    //TODO pagination with mongoose
    return Record.find();
  };

  findBy = async (name, pageNumber, pageLimit) => {
    return Record.find({ $or: [{ format: name }, { style: name }, { name: name }] })
      .sort({
        format: 'asc'
      })

      .limit(parseInt(pageLimit))
      .skip(parseInt(pageLimit) * pageNumber);
  };
}

const recordService = new RecordService();
export default recordService;
