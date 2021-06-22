import recordService from '../service/recordService.js';

class RecordController {
  findAll = (req, res) => {
    const { sortBy } = req.query;
    /* 
    const page = Math.max(0, req.params.page);
    console.log(page); */
    recordService
      .findAll(sortBy)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: `${err.message}` }));
  };

  findBy = async (req, res) => {
    const { name, pageNumber, pageLimit } = req.query;
    await recordService
      .findBy(name, pageNumber, pageLimit)
      .then((result) => {
        res.status(200).json({ total: result.length, result });
      })
      .catch((err) => res.status(500).json({ error: `${err.message}` }));
  };
}

const recordController = new RecordController();
export default recordController;
/* 
{
  total: 300,
  itemsPerPage: 30
} */
