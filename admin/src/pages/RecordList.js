// eslint-disable-next-line object-curly-newline
import { Box, Container, Pagination } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import LatestProducts from '../components/dashboard/LatestRecords';
import ProductListToolbar from '../components/record/RecordListToolbar';

const RecordList = () => (
  <>
    <Helmet>
      <title>Record List</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <LatestProducts sx={{ height: '100%' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Box>
  </>
);
export default RecordList;
