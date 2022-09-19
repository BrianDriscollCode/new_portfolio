import { useState } from "react";
import styles from "../../styles/home/Contact.module.scss";

const Contact = () => {

    const [ name, setName ] = useState("Name");
    const [ email, setEmail ] = useState("Email");
    const [ message, setMessage ] = useState("Message");

    return (
        
        <div 
            className={styles.contact_container}
            id="contact"
        >
            <div className={styles.contact_wrapper}>
                <h2> Reach Out and Let&apos;s Talk </h2> 

                <form 
                    className={styles.form}
                    action="https://formsubmit.co/bdriscoll407@gmail.com" 
                    method="POST"
                >
                    <h3> New Project? Quick Question? </h3>
                    <p> Fill out the form below to get in touch. I look forward to helping in anyway I can. </p>

                    <input value={name} onChange={(e) => setName(e.target.value)}/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

                    <button type="submit"> Send Email </button>
                </form>

            </div>
        </div>

    )

}

export default Contact