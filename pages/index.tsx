import type { NextPage } from 'next';
import Banner from "../components/home/Hero_Banner";
import Carousel from "../components/home/Technologies_carousel";
import Sectioner from "../components/home/Sectioner";
import Portfolio from "../components/home/Portfolio";

const Home: NextPage = () => {
  return (
    <div>
      
      <Banner />
      <Carousel />
      <Sectioner />
      <Portfolio />


    </div>
  )
}

export default Home
