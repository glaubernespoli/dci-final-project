import { Route, withRouter } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export const HomeRoute = '/';
export const AboutUsRoute = '/aboutus';
export const ContactUsRoute = '/contactus';
export const LoginRoute = '/login';
export const SignUpRoute = '/signup';

const Routing = () => (
  <>
    <Route path={HomeRoute} exact component={Home} />
    <Route path={AboutUsRoute} component={AboutUs} />
    <Route path={ContactUsRoute} component={ContactUs} />
    <Route path={LoginRoute} component={Login} />
    <Route path={SignUpRoute} component={SignUp} />
  </>
);

export default withRouter(Routing);
