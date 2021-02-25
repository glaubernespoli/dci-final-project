import LogoImg from './logo.jpg';
import UseStyles from './logoStyle';

export default function Logo() {
  const classes = UseStyles();
  return (
    <div>
      <img src={LogoImg} alt="Sell Your Records" className={classes.logo} />
    </div>
  );
}
