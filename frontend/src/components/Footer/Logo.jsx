import { makeStyles } from '@material-ui/core/styles';
import LogoComponent from '../Header/Logo/Logo';

const useStyles = makeStyles({
  root: {
    '@media(max-Width : 600px)': {
      display: 'none'
    }
  }
});

export default function Logo() {
  const { root } = useStyles();

  return (
    <div className={root}>
      <LogoComponent />
    </div>
  );
}
