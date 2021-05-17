import { Route, withRouter } from 'react-router-dom';
import AboutUsPage from '../containers/pages/AboutUsPage';
import ContactUsPage from '../containers/pages/ContactUsPage';
import HomePage from '../containers/pages/HomePage';
import LoginPage from '../containers/pages/LoginPage';
import SignUpPage from '../containers/pages/SignUpPage';
import { AboutUsRoute, ContactUsRoute, HomeRoute, LoginRoute, SignUpRoute } from './routes';

const Routing = () => (
  <>
    <Route path={HomeRoute} exact component={HomePage} />
    <Route path={AboutUsRoute} component={AboutUsPage} />
    <Route path={ContactUsRoute} component={ContactUsPage} />
    <Route path={LoginRoute} component={LoginPage} />
    <Route path={SignUpRoute} component={SignUpPage} />
  </>
);

export default withRouter(Routing);
