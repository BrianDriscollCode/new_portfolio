import stylings from "../../styles/home/Portfolio.module.scss";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { useState } from "react";

const Portfolio = () => {

    const [image, setImage] = useState(0);

    const handleClick = () => {

        if (image < 3 ) {

            setImage(image +  1)

        } else {

            setImage(0)

        }

    }

    return (

        <section className={stylings.portfolio}>
            <div className={stylings.portfolio_container}>
                <h2> Take a look at my work </h2>
                <p> Frontend // Database // UI </p> 
            </div>

            <div className={stylings.image_container}>

                <div 
                    className={stylings.left_button}
                    onClick={() => handleClick()}
                >
                    <IoIosArrowBack size={75} />
                </div>

                {/* images */}

                <div className={stylings.images_wrapper}>
                    <div className={stylings.portfolio_image_container}>
                        <div 
                            className={stylings.image1}
                            style={image === 0 ? 
                                    { opacity: 1 }:
                                    { opacity: 0 }
                            }
                        >
                            <Image 
                                src="/project_1.jpg" 
                                width={540} 
                                height={360} 
                            />

                            <div className={stylings.portfolio_info}>
                                <h3> Title Boxing </h3>
                                <p>  This is and explanation of what I did, why I did it,
                                    and how I accomplished my goals.
                                </p>
                                <p> Technology: React, Redux, SASS </p>
                            </div>
                            
                        </div>
                        <div 
                            className={stylings.image2}
                            style={image === 1 ? 
                                { opacity: 1 }:
                                { opacity: 0 }
                        }
                        >
                            <Image 
                                src="/project_2.jpg" 
                                width={540} 
                                height={360} 
                            />

                            <div className={stylings.portfolio_info}>
                                <h3> Title Boxing </h3>
                                <p>  This is and explanation of what I did, why I did it,
                                    and how I accomplished my goals.
                                </p>
                                <p> Technology: React, Redux, SASS </p>
                            </div>
                        </div>
                        <div 
                            className={stylings.image3}
                            style={image === 2 ? 
                                { opacity: 1 }:
                                { opacity: 0 }
                        }
                        >
                            <Image 
                                src="/project_3.jpg" 
                                width={540} 
                                height={360} 
                            />

                            <h3> Title </h3>
                            <p> Explanation </p>
                            <p> technology </p>
                        </div>
                        <div 
                            className={stylings.image4}
                            style={image === 3 ? 
                                { opacity: 1 }:
                                { opacity: 0 }
                        }
                        >
                            <Image 
                                src="/project_4.jpg" 
                                width={540} 
                                height={360} 
                            />

                            <h3> Title </h3>
                            <p> Explanation </p>
                            <p> technology </p>
                        </div>
                    </div>

                </div>
                

                {/* end images */}
                
                <div 
                    className={stylings.right_button}
                    onClick={() => handleClick()}
                >
                    <IoIosArrowForward size={75} />
                </div>
                
            </div>
         
        </section>
        

    )

}

export default Portfolio;