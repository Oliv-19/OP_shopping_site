import { Link } from "react-router"
import Nav from "./Nav"

export default function HomePage(){
    return (
        <div>
            <Nav></Nav>
            <div>
                <h1>SHOP</h1>
                <Link to="/shop">Shop now</Link>
            </div>
        </div>
    )
}