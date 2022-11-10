import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Reviews from "../../Pages/Reviews/Reviews";
import UpdateReviews from "../../Pages/Reviews/UpdateReviews";
import ServiceAdd from "../../Pages/ServiceAdd/ServiceAdd";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/blog', 
          element: <Blog></Blog>
        },
        {
          path: '/allservices', 
          element: <Services></Services>
        },

        {
          path: '/login', 
          element: <Login></Login>
        },
        {
          path: '/signup', 
          element: <SignUp></SignUp>
        },
        {
          path: '/updatereview/:id', 
          element: <UpdateReviews></UpdateReviews>,
          loader: ({params})=> fetch(`https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/services2/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params})=> fetch(`https://assignment-hero-eleventh-server-nazmulhasan8.vercel.app/services/${params.id}`)
        },
        {
          path: '/orders',
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: '/reviews',
          element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
        },
        {
          path: '/serviceadd',
          element: <PrivateRoute><ServiceAdd></ServiceAdd></PrivateRoute>
        }
      ]
    }
  ]);

  export default router;