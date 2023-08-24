import {  Navbar } from '../components';
import { About,  Hero, Products , Cardpage } from '../sections';

const Home = () => (
  <div className="gradient-black-black gradient-pink-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      </div>
      <Products/>
      <Cardpage/>

    
  </div>
);

export default Home;
