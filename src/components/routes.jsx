import App from "./App"
import Cart from "./Cart"
import ErrorPage from "./ErrorPage"
import HomePage from "./HomePage"
import Shop from "./Shop"

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
            // {
            //     path:'/contactUs',
            //     element: <Contact />,
            //     errorElement: <ErrorPage />
            // }
        ]
    },
]


export default routes