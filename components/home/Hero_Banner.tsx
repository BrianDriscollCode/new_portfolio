import Banner_styles from "../../styles/home/Banner.module.scss";
import Link from "next/link";

const Hero_Banner = () => {



    return (

        <div className={Banner_styles.banner}>
            <div className={Banner_styles.banner_container}>
                <div className={Banner_styles.headline_container}>

                    <h1> Frontend Web Developer </h1>
                    <p> My name is Brian I build valuable user experiences and web applications using JavaScript, React, and CSS. </p>
                    <a href="#contact"> <button> LET&apos;S WORK TOGETHER </button> </a>

                </div>
                
            </div>
        </div>

    )

}

export default Hero_Banner;