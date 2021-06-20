import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../auth/protected-route';
import AboutUsPage from '../containers/pages/AboutUsPage';
import ContactUsPage from '../containers/pages/ContactUsPage';
import HomePage from '../containers/pages/HomePage';
import LoginPage from '../containers/pages/LoginPage';
import ProfilePage from '../containers/pages/ProfilePage';
import RecordItemPage from '../containers/pages/RecordItemPage';
import SignUpPage from '../containers/pages/SignUpPage';
import {
  AboutUsRoute,
  ContactUsRoute,
  HomeRoute,
  LoginRoute,
  ProfileRoute,
  RecordRoute,
  SignUpRoute
} from './routes';

const Routing = () => (
  <Routes>
    <Route path={HomeRoute} element={<HomePage />} />
    <Route path={AboutUsRoute} element={<AboutUsPage />} />
    <Route path={ContactUsRoute} element={<ContactUsPage />} />
    <Route path={LoginRoute} element={<LoginPage />} />
    <Route path={SignUpRoute} element={<SignUpPage />} />
    <Route path={RecordRoute} element={<RecordItemPage />} />
    <ProtectedRoute path={ProfileRoute} component={ProfilePage} />
  </Routes>
);

export default Routing;
