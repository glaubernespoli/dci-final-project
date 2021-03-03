import { Route, withRouter } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
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
