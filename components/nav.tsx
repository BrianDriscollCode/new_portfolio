import Link from "next/link";
import navbar_styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Nav = () => {

    return (

        <nav className={navbar_styles.navbar}>

            <div className={navbar_styles.nav_container}>
                <Image 
                    src="/logo.png" 
                    width={50}
                    height={50}
                />
                

                <div className={navbar_styles.navbar_items}>
                    
                    <div className="">
                        <Link href="/"> Home </Link>
                    </div> 
                       
                    <div>
                        <Link href="/about">About </Link>
                    </div>
                    
                    <div>
                        <Link href="/"> Portfolio </Link>
                    </div>
                    
                    <div>
                        <Link href="/">Resume</Link>
                    </div>
                    
                    <div>
                        <Link href="/">Contact</Link>
                    </div>
                    
                    
                </div>

            </div>

        </nav>

    )

}

export default Nav;