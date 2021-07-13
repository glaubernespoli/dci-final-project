export const HomeRoute = '/';
export const AboutUsRoute = '/aboutus';
export const ContactUsRoute = '/contactus';
export const LoginRoute = '/login';
export const SignUpRoute = '/signup';
export const SearchRoute = '/record/s';
export const RecordRoute = (id) => `/record/${id}`;
export const ProfileRoute = '/profile';
export const ShoppingCartRoute = '/shoppingCart';

export const AdminRoute = process.env.REACT_APP_ADMIN_ROUTE;
