import { Route, withRouter } from 'react-router-dom';
import {
  AboutUsRoute,
  ContactUsRoute,
  HomeRoute,
  LoginRoute,
  SignUpRoute
} from '../../assets/js/Routing/routes';
import AboutUs from '../aboutUs/AboutUs';
import ContactUs from '../contactUs/ContactUs';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

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
