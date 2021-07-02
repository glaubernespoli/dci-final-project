import LogoStyle from './Logo.style';

const Logo = (props) => {
  const classes = LogoStyle();
  return (
    <img
      alt="Logo"
      src="/static/logo.jpg"
      className={classes.logo}
      {...props}
    />
  );
};

export default Logo;
