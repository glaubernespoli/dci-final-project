// eslint-disable-next-line object-curly-newline
import { Box, Button, Card, CardContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const RecordCard = ({ record, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 1
        }}
      >
        <img
          alt="Product"
          src={record.imageUrl}
          style={{ width: '220px', height: '200px' }}
        />
      </Box>
      <Box m={2}>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {record.name}
        </Typography>
        <Typography align="center" color="secondary" variant="body1">
          {record.style}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {record.summary}
        </Typography>
      </Box>
      <Box m={2}>
        <Typography
          // align="center"
          color="primary"
          variant="body1"
          display="flex"
          flexDirection="column"
        >
          <h4>
            Price:
            {`${record.price} €`}
          </h4>

          <Button variant="outlined">Add to Cart</Button>
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

RecordCard.propTypes = {
  record: PropTypes.object.isRequired
};

export default RecordCard;
