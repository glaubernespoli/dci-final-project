import { Box, Container, Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import LatestOrders from '../components/dashboard/LatestOrders';
import LatestProducts from '../components/dashboard/LatestRecords';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Sell Yours Records</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
