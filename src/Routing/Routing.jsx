import { Route, withRouter } from 'react-router-dom';
import AboutUs from '../containers/aboutUs/AboutUs';
import ContactUs from '../containers/contactUs/ContactUs';
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import SignUp from '../containers/SignUp/SignUp';
import { AboutUsRoute, ContactUsRoute, HomeRoute, LoginRoute, SignUpRoute } from './routes';

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
