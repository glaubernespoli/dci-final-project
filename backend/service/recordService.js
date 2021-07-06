import Record from '../model/Record.js';

class RecordService {
  itemsPerPage = process.env.ITEMS_PER_PAGE || 30;

  //https://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js

  findAll = async (sortBy) => {
    const validSortByValues = ['releaseDate', 'name'];
    return Record.find();
  };

  findBy = async (name, pageNumber, pageLimit) => {
    const limit = parseInt(pageLimit);
    const offset = parseInt(pageLimit * (pageNumber || 0));
    return Record.find({
      $or: [{ format: name }, { style: name }, { name: name }, { artist: name }]
    })
      .collation({ locale: 'en', strength: 2 })
      .limit(limit)
      .skip(offset);
  };

  findByCount = async (name, pageNumber, pageLimit) => {
    const limit = parseInt(pageLimit);
    const offset = parseInt(pageLimit * (pageNumber || 0));
    return Record.find({
      $or: [{ format: name }, { style: name }, { name: name }, { artist: name }]
    }).countDocuments();
  };

  findById = async (id) => {
    return Record.findById(id);
  };
}

const recordService = new RecordService();
export default recordService;
