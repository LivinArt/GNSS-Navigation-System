import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Login from './views/Login/Login';
import AuthPage from './views/AuthPage/AuthPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([

  {
    path: '/',
    element: <Login />
  },

  {
    path: '/authPage',
    element: <AuthPage />
  },
 

])

root.render(<RouterProvider router={router} />);

