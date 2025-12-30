import { useState } from 'react'
import styles from './Contact.module.css'

export function Contact(){
    const [isSend, setIsSend] = useState(false)
    const handleClick= (e) => {
        e.preventDefault()
        setIsSend(true)
    }
     return (
    
        <main className={styles.main}>
            <h1>Contact Us</h1>
            <div className={styles.box}>
                {isSend? (
                    <p>Message sent successfully</p>

                ):(
                    <form action="" className={styles.form}>
                        <label htmlFor="">
                            Name
                            <input type="text" name="name" id="" required/> 
                        </label>
                        <label htmlFor="">
                            Email
                            <input type="email" name="name" id="" required/> 
                        </label>
                        <div>
                            <label htmlFor="" className={styles.textareaLabel} required>
                                Message
                                <textarea rows='10' cols='45' /> 
                            </label>

                        </div>
                        <button onClick={handleClick} className={styles.btn}>Send</button>
                    </form>
                )}

            </div>
        </main>
    )
}