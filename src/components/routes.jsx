import App from "./App"
import ErrorPage from "./ErrorPage"
import HomePage from "./HomePage"

const routes = [
    {
        path:'/',
        element: <HomePage /> ,
        errorElement: <ErrorPage />,
    },
    // {
    //     path:'/shop',
    //     element: <Shop />,
    //     errorElement: <ErrorPage />
    // },
    // {
    //     path:'/cart',
    //     element: <Cart />,
    //     errorElement: <ErrorPage />
    // },
    // {
    //     path:'/contactUs',
    //     element: <Contact />,
    //     errorElement: <ErrorPage />
    // }
]


export default routes