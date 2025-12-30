import { Link } from "react-router"
import styles from './HomePage.module.css'

export default function HomePage(){
    return (
        <main className={styles.main}>
            <div>
                <div className={styles.title}>
                    <h1>SHOP</h1>
                    <Link to="/shop">Shop now</Link>
                    <p>Photo by <Link to='https://unsplash.com/es/@anotherlovely' target="_blank">Alyssa Strohmann</Link></p>
                </div>
                <div className={styles.imgWrapper}>
                    <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className={styles.bg} />
                </div>

            </div>
        </main>
    )
}