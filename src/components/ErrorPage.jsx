import {useNavigate } from "react-router"
export default function ErrorPage(){
    const navigate = useNavigate()
    return (
        <>
            <h1>Oops, not a page yet</h1>
            <button onClick={()=> navigate(-1)}>Go back</button>
        </>
    )
}