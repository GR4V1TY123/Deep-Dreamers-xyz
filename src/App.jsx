import My3DModel from './components/My3DModel';
import Home from './components/Home';
import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';
import "./styles/styles.css"
import Carousel from './components/home/Carousel';
import GenderSection from './components/home/GenderSection';
import Features from './components/home/Features';
import Footer from './components/home/Footer';
import { useEffect, useState } from 'react';
import SportSection from './components/home/SportSection';
import NikeLoadingPage from './components/NikeLoadingPage';
import Athletes from './components/Athletes';
import JordanCollection from './components/JordanCollection';



function App() {


  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/scripts/scripts.js'; // Place it in public/scripts/scripts.js or serve via CDN
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      {/* <Home /> */}
      <div className="bg-white">
        <Navbar />
        <Hero />
        <Carousel />
        <GenderSection />
        <SportSection/>
        <JordanCollection/>
        <Features />
        {/* <Athletes/> */}
        
        <Footer />
      </div>
    </>
  );
}

export default App;
