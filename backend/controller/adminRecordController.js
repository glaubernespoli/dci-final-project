import adminRecordService from '../service/adminRecordService';

class AdminRecordController {
  findAll = (req, res) => {
    const { sortBy } = req.query;

    adminRecordService
      .createOne(10, sortBy)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: `${err.message}` }));
  };
}

const adminRecordController = new AdminRecordController();
export default adminRecordController;
