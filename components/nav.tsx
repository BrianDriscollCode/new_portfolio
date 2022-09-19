import { useState } from "react";
import Link from "next/link";
import styles from "../styles/home/Navbar.module.scss";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiTurkishairlines } from "react-icons/si";
import { GrClose } from "react-icons/gr";

const Nav = () => {

    const [menuMaximized, setMenuMaximized] = useState(false);

    return (

        <nav 
            className={styles.navbar}
            style={menuMaximized ? 
                    {height: '700px'}: 
                    {height: "75px"}}
        >

            <div 
                className={styles.nav_container}
              
            >
            <img 
                    src="/logo.png"
                    loading="lazy"
                    decoding="async"
                    className={styles.logo}
                />
                

                <div 
                    className={styles.navbar_items}
                    style={menuMaximized ? 
                            {height: "500px", opacity: "1"}:
                            {}
                    }
                >
                    
                    <div>
                        <Link className={styles.link} href="/"> HOME </Link>
                    </div> 
                    
                    <div>
                        <Link className={styles.link} href="/#portfolio"> PORTFOLIO </Link>
                    </div>

                    <div>
                        <Link className={styles.link} href="/#about"> ABOUT </Link>
                    </div>
                    
                    <div>
                        <a 
                            className={styles.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="/Frontend_Web_Developer_Resume_Brian_Driscoll.pdf"
                        > RESUME </a>
                    </div>
                    
                    <div>
                        <Link className={styles.link} href="/#contact"> CONTACT </Link>
                    </div>

                </div>

                    {
                        !menuMaximized ? 
                        <GiHamburgerMenu 
                            className={styles.hamburger_menu} 
                            size={50}
                            onClick={() => setMenuMaximized(!menuMaximized)}
                        /> :
                        <GrClose 
                            className={styles.hamburger_menu} 
                            size={50}
                            color="white"
                            onClick={() => setMenuMaximized(!menuMaximized)}
                        />
                    }

                    

                    
                    
                    

            </div>

        </nav>

    )

}

export default Nav;