import { Link } from "react-router"
import Nav from "./Nav/Nav"

export default function HomePage(){
    return (
        <>
            <div>
                <h1>SHOP</h1>
                <Link to="/shop">Shop now</Link>
            </div>
        </>
    )
}