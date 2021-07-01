import recordService from '../service/recordService.js';

class AdminController {
  getRecords = (req, res) => {
    const { sortBy } = req.query;

    recordService
      .findAll(10, sortBy)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: `${err.message}` }));
  };
}

const adminController = new AdminController();
export default adminController;
