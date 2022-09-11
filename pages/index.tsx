import type { NextPage } from 'next';
import Banner from "../components/home/Hero_Banner";
import Carousel from "../components/home/Technologies_carousel";
import Section from "../components/home/section";

const Home: NextPage = () => {
  return (
    <div>
      
      <Banner />
      <Carousel />
      <Section />

    </div>
  )
}

export default Home
