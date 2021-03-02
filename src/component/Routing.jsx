import { Route, withRouter } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';

export const HomeRoute = '/';
export const AboutUsRoute = '/aboutus';
export const ContactUsRoute = '/contactus';

const Routing = () => (
  <>
    <Route path={HomeRoute} exact component={Home} />
    <Route path={AboutUsRoute} component={AboutUs} />
    <Route path={ContactUsRoute} component={ContactUs} />
  </>
);

export default withRouter(Routing);
