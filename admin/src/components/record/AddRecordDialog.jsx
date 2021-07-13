import { Button } from '@material-ui/core';
import { useState } from 'react';
import AddRecordForm from './AddRecordForm';

const AddRecordDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button color="primary" variant="contained" onClick={handleOpen}>
        Add Record
      </Button>
      <AddRecordForm handleClose={handleClose} open={open} />
    </>
  );
};
export default AddRecordDialog;
