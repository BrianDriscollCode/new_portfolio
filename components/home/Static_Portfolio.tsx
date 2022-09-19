import Image from "next/image";
import Link from "next/link";
import styling from "../../styles/home/Static_portfolio.module.scss";

const Static_Portfolio = () => {


    return (

        <section 
            className={styling.portfolio_container}
            id="portfolio"
        >

            <h2 className={styling.title}> Take a look at my projects </h2> 
            <p className={styling.subtitle}>  Frontend // Database // UI </p>
            
            <div className={styling.section_container}>
   
                    <div className={styling.image_and_text_left}> 
                        <div className={styling.image_container}>
                            <Image src="/project_1.jpg" width={1080} height={720} />
                        </div>
                        
                        <div className={styling.text_container_initial}>
                            <h3> Title Boxing Ecommerce </h3>

                            <p> Created a project that uses React, Redux, and SASS. The goal of this project was to create a full, end-to-end eCommerce
                                experience. This project features logging in, creating accounts, managing a cart, reusable components, product sorting, and more. 
                            </p>

                            <a 
                                href="https://title-boxing-store.vercel.app/#/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            > 
                                <button className={styling.button}> 
                                    See Page
                                </button>   
                            </a>
                            
                            <a 
                                href="https://github.com/BrianDriscollCode/title_boxing_store" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            > 
                                <button className={styling.button}> 
                                    Github
                                </button>   
                            </a>
                        </div>
                    </div>
            </div>

            <div className={styling.section_container}>
   
                    <div className={styling.image_and_text_right}> 
                        <div className={styling.image_container}>
                            <Image src="/project_4.jpg" width={1080} height={720} />
                        </div>
                        
                        <div className={styling.text_container_after}>
                            <h3> Safaria World </h3>

                            <p> Built with pure HTML and CSS, this was created for a blockchain company. Built the main website, created documentation for their onchain products, and also made a browser mini-game using Phaser and JavaScript.
                            </p>

                            <a 
                                href="https://safaria.world/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            > 
                                <button className={styling.button}> 
                                    See Website
                                </button>   
                            </a> 
                            
                        </div>
                    </div>
            </div>

            <div className={styling.section_container}>
   
                    <div className={styling.image_and_text_left}> 
                        <div className={styling.image_container}>
                            <Image src="/project_5.jpg" width={1080} height={720} />
                        </div>
                        
                        <div className={styling.text_container_initial}>
                            <h3> Fitness Website (in progress) </h3>

                            <p>  Built using React and SASS. Created this project to make an easy-to-update application so it can be adjusted for different fitness businesses.
                                Also connected to AWS database using NodeJs and uses MySQL queries for logging in and creating accounts. Still in progress.
                            </p>

                            <a 
                                href="https://fitness-webkit.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            > 
                                <button className={styling.button}> 
                                    See Page
                                </button>   
                            </a>
                            
                            <a 
                                href="https://github.com/BrianDriscollCode/martial-arts-gym-webkit" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            > 
                                <button className={styling.button}> 
                                    Github
                                </button>   
                            </a>
                        </div>
                    </div>
            </div>
        </section>


    )

}

export default Static_Portfolio;