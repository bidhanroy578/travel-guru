import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import App from "../App";
import Login from "../pages/login/Login";
import Carousel from "../pages/home/Carousel";
import Booking from "../pages/booking/Booking";
import FormCreate from "../pages/login/FormCreate";
import FormLogin from "../pages/login/FormLogin";
import PrivateLink from "../private/PrivateLink";
import Error from "../Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <Error></Error> ,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <Carousel></Carousel>
                    },
                    {
                        path: '/booking',
                        element: <PrivateLink>
                            <Booking></Booking>
                        </PrivateLink>
                    }
                ]
            },
            {
                path: '/login',
                element: <Login></Login>,
                children: [
                    {
                        path: '/login',
                        element: <FormLogin></FormLogin>
                    },
                    {
                        path: '/login/create-account',
                        element: <FormCreate></FormCreate>,
                    },
                ]
            },
        ]
    }
])