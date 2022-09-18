import type { NextPage } from 'next';
import Banner from "../components/home/Hero_Banner";
import Carousel from "../components/home/Technologies_carousel";
import Section from "../components/home/Sectioner";
import Static_Portfolio from '../components/home/Static_Portfolio';
import About from "../components/home/About"

import section_styles from "../styles/home/Sectioner.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      
      <Banner />
      <Carousel />
      <Section color1="white" color2="#50656e" classSCSS={section_styles.sectioner_banner_2} />
      <Static_Portfolio />
      <Section color1="#50656e" color2="white" classSCSS={section_styles.sectioner_banner_2_a}/>
      <About />


    </div>
  )
}

export default Home
