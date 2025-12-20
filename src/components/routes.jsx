import App from "./App"
import ErrorPage from "./ErrorPage"

const routes = [
    {
        path:'/',
        element: <App />,
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


export default routes