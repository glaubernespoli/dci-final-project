// eslint-disable-next-line object-curly-newline
import { Box, Container, Grid, Pagination } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import ProductCard from '../components/record/RecordCard';
import ProductListToolbar from '../components/record/RecordListToolbar';
import records from '../__mocks__/records';

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
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {records.map((record) => (
              <Grid item key={records.id} lg={4} md={6} xs={12}>
                <ProductCard record={record} />
              </Grid>
            ))}
          </Grid>
        </Box>
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
