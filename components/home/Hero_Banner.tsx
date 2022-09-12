import Banner_styles from "../../styles/home/Banner.module.scss";

const Hero_Banner = () => {



    return (

        <div className={Banner_styles.banner}>
            <div className={Banner_styles.banner_container}>
                <div className={Banner_styles.headline_container}>

                    <h1> Frontend Web Developer </h1>
                    <p> My name is Brian I build valuable user experiences and web applications using JavaScript, React, and CSS. </p>
                    <button> Let's Work Together </button>

                </div>
                
            </div>
        </div>

    )

}

export default Hero_Banner;