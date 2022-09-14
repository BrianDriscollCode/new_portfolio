import type { NextPage } from 'next';
import Banner from "../components/home/Hero_Banner";
import Carousel from "../components/home/Technologies_carousel";
import Sectioner from "../components/home/Sectioner";
import Portfolio from "../components/home/Portfolio";
import Static_Portfolio from '../components/home/Static_Portfolio';

const Home: NextPage = () => {
  return (
    <div>
      
      <Banner />
      <Carousel />
      <Sectioner />
      <Static_Portfolio />
      {/*<Portfolio />*/}


    </div>
  )
}

export default Home
