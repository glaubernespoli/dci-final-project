import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import formats from '../../__mocks__/recordFormats';
import styles from '../../__mocks__/recordStyles';
import useStyles from './AddRecordForm.style';
// import { useAxios } from '/frontend/src/hooks/useAxios';

const styless = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1
};

const AddRecordForm = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [format, setFormat] = React.useState('');
  const [style, setStyle] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeFormat = (e) => {
    setFormat(e.target.value);
  };
  const handleChangeStyle = (e) => {
    setStyle(e.target.value);
  };

  // const { data, error, isLoading } = useAxios('post', '/adminRecordRouter');

  // if (isLoading) {
  //   return <CircularProgress />;
  // }

  // if (error) {
  //   return (
  //     <div>
  //       <p>{error.message}</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleOpen}>
        Add Record
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styless} component="form" method="post">
          <Paper className={classes.frm} variant="outlined">
            <Typography
              id="modal-description"
              sx={{ mt: 2 }}
              align="center"
              variant="h3"
              color="primary"
            >
              RECORD DETAILS
            </Typography>
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField id="standard-basic" label="Group" variant="standard" />
            <TextField
              id="standard-basic"
              label="Summary"
              multiline
              maxRows={3}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Description"
              multiline
              maxRows={10}
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Price"
              variant="standard"
              type="Number"
            />
            <TextField
              id="standard-select-currency-native"
              select
              label="Please Select your Record Format"
              value={format}
              onChange={handleChangeFormat}
              SelectProps={{
                native: true
              }}
              // helperText="Please select your Format"
              variant="standard"
            >
              {formats.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              id="standard-select-currency-native"
              select
              label="Please Select your Record Style"
              value={style}
              onChange={handleChangeStyle}
              SelectProps={{
                native: true
              }}
              // helperText="Please select your Format"
              variant="standard"
            >
              {styles.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField id="standard-basic" label="Country" variant="standard" />
            <Button variant="outlined" component="label">
              Upload Images
              <input type="file" accept="image/*" hidden />
            </Button>
            {/* <input type="file"> */}
            <Button color="primary" variant="contained">
              Insert Record
            </Button>
          </Paper>
        </Box>
      </Modal>
    </div>
  );
};
export default AddRecordForm;
