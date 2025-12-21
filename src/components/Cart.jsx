import Nav from "./Nav";

function Product(){
    return (
        <div>
            <div className="imgWrapper">
                <img src={null} alt="" />
            </div>
            <p>Lorem ipsum</p>
            <p>$10</p>
            <div className="quantity">
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <p>$10</p>
            <button>delete</button>
        </div>
    )
}

export default function Cart(){
    return (
        <>
            <Nav />
            <div className="products">
                <div className="titles">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Delete</p>
                </div>
                <Product/>
            </div>
        </>
    )
}