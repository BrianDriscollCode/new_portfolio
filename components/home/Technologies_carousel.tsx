import styles from "../../styles/home/Technology_Carousel.module.scss";

import { FaReact, FaSass, FaAws } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/Si";
import { TbBrandNextjs } from "react-icons/Tb" 
import { AiFillGithub } from "react-icons/Ai"

const Technologies_carousel = () => {

    return(

        <section className={styles.carousel}>

            <div className={styles.carousel_container}>
                
                <div className={styles.skill_item}>
                    <FaReact size={50} />
                </div>

                <div className={styles.skill_item}>
                    <FaSass size={50} />
                </div>

                <div className={styles.skill_item}>
                    <FaAws size={50} />
                </div>

                <div className={styles.skill_item}>
                    <SiTypescript size={50} />
                </div>

                <div className={styles.skill_item}>
                    <TbBrandNextjs size={50} />
                </div>

                <div className={styles.skill_item}>
                    <AiFillGithub size={50} />
                </div>
            </div>

        </section>

    )


}


export default Technologies_carousel;