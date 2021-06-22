import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const ButtonContainer = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

ButtonContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default ButtonContainer;
