import Logo from './logo.jpg';
import UseStyles from './logoStyle';

export default function logo() {
  const classes = UseStyles();
  return (
    <div>
      <img src={Logo} alt="Sell Your Records" className={classes.logo} />
    </div>
  );
}
