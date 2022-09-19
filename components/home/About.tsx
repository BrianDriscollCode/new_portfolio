import Link from "next/link";
import { SiTurkishairlines } from "react-icons/si";
import styles from "../../styles/home/About.module.scss";

const About = () => {

    return (

        <div 
            className={styles.about_container}
            id="about"
        >
            <div className={styles.about_wrapper}>

                <h3 className={styles.about_title}> About </h3>
                <h2 className={styles.about_name}> Who is Brian? </h2>

                <div className={styles.about_information}>
                    <div>
                        <div className={styles.profile_image}>
                            <img 
                                src="/Brian_Profile_photo.jpg" 
                                width="275"
                                height="275"
                            /> 
                        </div>
                        
                    </div>

                    <div className={styles.about_description}>

                        <h3 className={styles.tagline}> A passion-driven Front-End Developer with marketing experience. </h3>
                            
                        <p> Bringing both technical and creative skills to the table, I breathe life into your web applications. I&apos;m a builder who focuses on interactive experiences, writing readable code that humans and machines understand, and architecting front-end applications that make sense. Each line of code matters. If I can make it simpler, the better. </p>
                            
                        <p> I have certifications in both <a href="https://www.freecodecamp.org/certification/brian_driscoll/responsive-web-design"> Responsive Web Design</a> and <a href="https://www.freecodecamp.org/certification/brian_driscoll/javascript-algorithms-and-data-structures"> JavaScript Algorithms and Data Structures</a>, professional experience in government communications, and a track-record of delivering projects under strict deadlines. </p>

                        <p> It&apos;s a pleasure to create work that matters, to learn new skills, and to meet new people who also want to build their careers. Currently working on personal projects and helping clients bring their ideas to the web. If you are looking for help, feel free to contact me and say hi!  </p>

                        <div className={styles.contact_link}>
                            <a href="#" className={styles.u_line}> Let&apos;s Talk </a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

    )

}

export default About;