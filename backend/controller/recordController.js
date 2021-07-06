import recordService from '../service/recordService.js';

class RecordController {
  itemsPerPage = process.env.ITEMS_PER_PAGE || 3;

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
    const { q, page } = req.query;

    let status = 200;
    let result;
    try {
      const data = await recordService.findBy(q, page, this.itemsPerPage);

      const total = await recordService.findByCount(q, page, this.itemsPerPage);
      console.log(total);
      result = {
        data,
        paging: {
          total,
          page: page || 0,
          pages: Math.ceil(total / this.itemsPerPage)
        }
      };
    } catch (err) {
      status = 500;
      result = { error: `${err.message}` };
    } finally {
      res.status(status).json(result);
    }
  };
  findById = (req, res) => {
    const id = req.params.id;
    recordService
      .findById(id)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: `${err.message}` }));
  };

  findHot = (req, res) => {
    recordService
      .findHot({ hot: true })
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: `${err.message}` }));
  };
}

const recordController = new RecordController();
export default recordController;
