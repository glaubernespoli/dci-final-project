import { AppBar, Link, Toolbar } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar elevation={0} {...props}>
    <Toolbar sx={{ height: 64 }}>
      <Link href={process.env.REACT_APP_FRONTEND_ROUTE}>
        <Logo />
      </Link>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
