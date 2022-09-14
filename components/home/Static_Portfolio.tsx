import Image from "next/image";
import styling from "../../styles/home/Static_portfolio.module.scss";

const Static_Portfolio = () => {


    return (

        <section className={styling.portfolio_container}>

            <h2 className={styling.title}> Take a look at my projects </h2> 
            <p className={styling.subtitle}>  Frontend // Database // UI </p>
            
            <div className={styling.section_container}>
   
                    <div className={styling.image_and_text_left}> 
                        <div className={styling.image_container}>
                            <Image src="/project_1.jpg" width={1080} height={720} />
                        </div>
                        
                        <div className={styling.text_container_initial}>
                            <h3> Title Boxing Ecommerce </h3>

                            <p> This is an explanation of project that I did that explains what I did, why I did, and how I made my choices.
                                    This can go into a bit of depth so the user understands my project and what I accomplished. 
                            </p>

                            <button> See Page</button> 
                            <button> Github </button>
                        </div>
                    </div>
            </div>

            <div className={styling.section_container}>
   
                    <div className={styling.image_and_text_right}> 
                        <div className={styling.image_container}>
                            <Image src="/project_4.jpg" width={1080} height={720} />
                        </div>
                        
                        <div className={styling.text_container_after}>
                            <h3> Title Boxing Ecommerce </h3>

                            <p> This is an explanation of project that I did that explains what I did, why I did, and how I made my choices.
                                    This can go into a bit of depth so the user understands my project and what I accomplished. 
                            </p>

                            <button> See Page</button> 
                            <button> Github </button>
                        </div>
                    </div>
            </div>

            <div className={styling.section_container}>
   
                    <div className={styling.image_and_text_left}> 
                        <div className={styling.image_container}>
                            <Image src="/project_5.jpg" width={1080} height={720} />
                        </div>
                        
                        <div className={styling.text_container_initial}>
                            <h3> Title Boxing Ecommerce </h3>

                            <p> This is an explanation of project that I did that explains what I did, why I did, and how I made my choices.
                                    This can go into a bit of depth so the user understands my project and what I accomplished. 
                            </p>

                            <button> See Page</button> 
                            <button> Github </button>
                        </div>
                    </div>
            </div>
        </section>


    )

}

export default Static_Portfolio;