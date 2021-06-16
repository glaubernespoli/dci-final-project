import { Route, Routes } from 'react-router-dom';
import AboutUsPage from '../containers/pages/AboutUsPage';
import ContactUsPage from '../containers/pages/ContactUsPage';
import HomePage from '../containers/pages/HomePage';
import LoginPage from '../containers/pages/LoginPage';
import SignUpPage from '../containers/pages/SignUpPage';
import { AboutUsRoute, ContactUsRoute, HomeRoute, LoginRoute, SignUpRoute } from './routes';

const Routing = () => (
  <Routes>
    <Route path={HomeRoute} exact element={<HomePage />} />
    <Route path={AboutUsRoute} element={<AboutUsPage />} />
    <Route path={ContactUsRoute} element={<ContactUsPage />} />
    <Route path={LoginRoute} element={<LoginPage />} />
    <Route path={SignUpRoute} element={<SignUpPage />} />
  </Routes>
);

export default Routing;
