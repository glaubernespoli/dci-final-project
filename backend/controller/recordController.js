import recordService from '../service/recordService.js';

class RecordController {
  findAll = (req, res) => {
    const { sortBy } = req.query;

    recordService
      .findAll(10, sortBy)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: `${err.message}` }));
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
