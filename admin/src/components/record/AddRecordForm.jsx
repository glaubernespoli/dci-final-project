import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  TextField
} from '@material-ui/core';
import PropTypes from 'prop-types';
import formats from '../../__mocks__/recordFormats';
import recordStyles from '../../__mocks__/recordStyles';
import useStyles from './AddRecordForm.style';

const AddRecordForm = ({ handleClose, open }) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Record Item</DialogTitle>
          <DialogContent>
            <DialogContentText
              style={{
                margin: '1rem'
              }}
            >
              Fill the fields below to add a new record:
            </DialogContentText>

            <div className={classes.frm}>
              <TextField
                id="name"
                label="Name"
                variant="standard"
                margin="normal"
                required
                fullWidth
              />

              <TextField
                id="artist"
                label="Artist"
                variant="standard"
                margin="normal"
                required
                fullWidth
              />

              <TextField
                id="summary"
                label="Summary"
                multiline
                minRows={3}
                fullWidth
                variant="outlined"
                required
              />

              <TextField
                id="description"
                label="Description"
                multiline
                fullWidth
                minRows={10}
                variant="outlined"
                required
              />

              <TextField
                id="format"
                select
                label="Format"
                // value={format}
                // onChange={handleChangeFormat}
                helperText="Select the record's format"
                variant="standard"
                required
              >
                {formats.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="style"
                select
                label="Style"
                // value={recordStyles}
                // onChange={handleChangeStyle}
                helperText="Select the record's style"
                variant="standard"
                required
              >
                {recordStyles.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField id="country" label="Country" variant="standard" />
              <TextField id="label" label="Label" variant="standard" />

              <TextField
                id="price"
                label="Price"
                variant="standard"
                type="Number"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">€</InputAdornment>
                  )
                }}
              />

              <TextField
                id="quantity"
                label="Quantity"
                variant="standard"
                type="Number"
                required
              />

              <FormControlLabel
                control={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <Checkbox
                    checked
                    // onChange={handleChange}
                    name="hot"
                    color="primary"
                  />
                }
                label="Hot Product"
              />

              <TextField
                id="imageUrl"
                label="Image URL"
                variant="standard"
                margin="normal"
                required
                fullWidth
              />
            </div>
          </DialogContent>

          <DialogActions className={classes.btnContainer}>
            <Button type="submit" color="primary" variant="contained">
              Insert Record
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

AddRecordForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired
};
export default AddRecordForm;
