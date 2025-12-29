import {useNavigate } from "react-router"
import Nav from '../Nav/Nav'
import styles from './ErrorPage.module.css'
import { Icon } from "../Shop/Shop"
export default function ErrorPage(){
    const navigate = useNavigate()
    return (
        <main className={styles.main}>

            <div className={styles.errorBox}>  
                <span>404</span>
                <h1>Page not found</h1>
                <button className={styles.btn} onClick={()=> navigate(-1)}>
                    <Icon title={'arrowBack'}/>
                    Go back
                </button>
            </div>
        </main>
    )
}