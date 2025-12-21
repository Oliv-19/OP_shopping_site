import Nav from "./Nav";

function Card(){
    return (
        <div>
            <div className="img">
                <img src={null} alt="" />
                <button>Add</button>
            </div>
            <div className="info">
                <p>lorem ipsum</p>
                <p>$10</p>
                <div className="colors">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
            </div>
        </div>
    )
}

export default function Shop(){
    return (
        <div>
            <Nav />
            <div>
                {<Card/>}
            </div>
        </div>
    )
}