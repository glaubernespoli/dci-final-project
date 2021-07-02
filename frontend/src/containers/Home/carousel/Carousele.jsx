import CircularProgress from '@material-ui/core/CircularProgress';
import Carousel from 'react-material-ui-carousel';
import { useAxios } from '../../../hooks/useAxios';
import useStyles from './Carousel.style';
import Item from './Item';

const Carousele = () => {
  const classes = useStyles();

  const { data, error, isLoading } = useAxios('get', '/record');

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <Carousel
      animation="slide"
      fullHeightHover
      interval={3000}
      navButtonsAlwaysVisible
      className={classes.root}
    >
      {data.map((item) => (
        // eslint-disable-next-line no-underscore-dangle
        <Item key={item._id} item={item} />
      ))}
    </Carousel>
  );
};
export default Carousele;
