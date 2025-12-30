import styles from './Contact.module.css'

export function Contact(){
     return (
    
        <main className={styles.main}>
            <h1>Contact Us</h1>
            <form action="" className={styles.form}>
                <label htmlFor="">
                    Name
                    <input type="text" name="name" id="" /> 
                </label>
                <label htmlFor="">
                    Email
                    <input type="email" name="name" id="" /> 
                </label>
                <div>
                    <label htmlFor="" className={styles.textareaLabel}>
                        Message
                        <textarea rows='10' cols='45' /> 
                    </label>

                </div>
                <button onClick={(e)=> e.preventDefault()} className={styles.btn}>Send</button>
            </form>
        </main>
    )
}