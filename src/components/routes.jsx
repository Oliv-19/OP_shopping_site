import App from "./App"
import Cart from "./Cart/Cart"
import ErrorPage from "./ErrorPage/ErrorPage"
import HomePage from "./HomePage/HomePage"
import Shop from "./Shop/Shop"
import { Contact } from "./ContactUs/Contact"

const routes = [
    {
        path:'/',
        element: <App /> ,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <HomePage />,
                errorElement: <ErrorPage />
            },
            {
                path:'/shop',
                element: <Shop />,
                errorElement: <ErrorPage />
            },
            {
                path:'/cart',
                element: <Cart />,
                errorElement: <ErrorPage />
            },
            {
                path:'/contactUs',
                element: <Contact />,
                errorElement: <ErrorPage />
            }
        ]
    },
]


export default routes