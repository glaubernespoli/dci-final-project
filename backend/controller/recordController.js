import recordService from '../service/recordService.js';

class RecordController {
  findAll = (req, res) => {
    const { sortBy } = req.query;

    const page = Math.max(0, req.params.page);
    recordService
      .findAll(page, sortBy)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: `${err.message}` }));
  };
  /*  findBy = (req, res) => {
    recordService
      .findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: `${err.message}` }));
  }; */
}

const recordController = new RecordController();
export default recordController;
/* 
{
  total: 300,
  itemsPerPage: 30
} */
