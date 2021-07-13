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
import { DropzoneArea } from 'material-ui-dropzone';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import formats from '../../__mocks__/recordFormats';
import recordStyles from '../../__mocks__/recordStyles';
import useStyles from './AddRecordForm.style';

const AddRecordForm = ({ handleClose, open }) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  // eslint-disable-next-line no-unused-vars
  const onSubmit = (data) => {
    handleClose();
  };

  return (
    <>
      <Box component="form">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle id="form-dialog-title">
              Add New Record Item
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                style={{
                  margin: '1rem'
                }}
              >
                Fill the fields below to add a new record:
              </DialogContentText>
              <div className={classes.frm}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Name is required' }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      id="name"
                      label="Name"
                      variant="standard"
                      margin="normal"
                      fullWidth
                      required
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />

                <Controller
                  name="artist"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Artist is required' }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      id="artist"
                      label="Artist"
                      variant="standard"
                      margin="normal"
                      fullWidth
                      required
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />

                <Controller
                  name="summary"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Summary is required' }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      id="summary"
                      label="Summary"
                      multiline
                      minRows={3}
                      fullWidth
                      variant="outlined"
                      required
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />

                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Description is required' }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      id="description"
                      label="Description"
                      multiline
                      fullWidth
                      minRows={10}
                      variant="outlined"
                      required
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />

                <Controller
                  name="format"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Format is required' }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      id="format"
                      select
                      label="Format"
                      variant="standard"
                      required
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={
                        error ? error.message : "Select the record's format"
                      }
                    >
                      {formats.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />

                <Controller
                  name="style"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Style is required' }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      id="style"
                      select
                      label="Style"
                      variant="standard"
                      required
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={
                        error ? error.message : "Select the record's style"
                      }
                    >
                      {recordStyles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />

                <Controller
                  name="country"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      id="country"
                      label="Country"
                      variant="standard"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />

                <Controller
                  name="label"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      id="label"
                      label="Label"
                      variant="standard"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />

                <Controller
                  name="price"
                  control={control}
                  rules={{ required: 'Price is required' }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
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
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />

                <Controller
                  name="quantity"
                  control={control}
                  rules={{ required: 'Quantity is required' }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      id="quantity"
                      label="Quantity"
                      variant="standard"
                      type="Number"
                      required
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />

                <Controller
                  name="imageUrl"
                  control={control}
                  rules={{ required: 'Image image is required' }}
                  render={({ field: { onChange } }) => (
                    <DropzoneArea
                      acceptedFiles={['image/*']}
                      onChange={onChange}
                      showFileNames
                      dropzoneText="Drop the image here"
                      showAlerts={false}
                      filesLimit={1}
                    />
                  )}
                />

                <FormControlLabel
                  control={
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    <Controller
                      name="hot"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Checkbox
                          id="hot"
                          name="hot"
                          color="primary"
                          value={value}
                          onChange={onChange}
                        />
                      )}
                    />
                  }
                  label="Hot Product"
                />
              </div>
            </DialogContent>

            <DialogActions className={classes.btnContainer}>
              <Button type="submit" color="primary" variant="contained">
                Insert Record
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Box>
    </>
  );
};

AddRecordForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
export default AddRecordForm;
